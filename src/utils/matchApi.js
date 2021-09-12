const getHttpData = require("./getHttpData")
const getHttpInfo = require("./getHttpInfo")
const match404 = require("./match404")
const matchRouter = require("./matchRouter")

const matchApi = async (res, req, controllers, modals) => {
  const { path, method, queryParams, deleteId } = getHttpInfo(res, req)
  const matchRouterName = matchRouter(path)

  if (!matchRouterName) {
    return match404(path)
  }

  const modal = modals[matchRouterName]
  const ctx  = new controllers[matchRouterName](modal)

  // 查询多个
  if (method === 'GET' && path === `/api/${matchRouterName}s`) {
    return ctx.getAll(queryParams)
  }

  // 查询单个
  if (method === 'GET' && path === `/api/${matchRouterName}`) {
    return ctx.getOne(queryParams)
  }

  // 创建
  if (method === 'POST' && path === `/api/${matchRouterName}`) {
    const bodyParams = await getHttpData(req)
    return ctx.create(bodyParams)
  }

  // 更新
  if (method === 'PUT' && path === `/api/${matchRouterName}`) {
    const bodyParams = await getHttpData(req)
    return ctx.update(bodyParams)
  }

  // 删除
  if (method === 'DELETE' && path === `/api/${matchRouterName}/${deleteId}`) {
    return ctx.delete(deleteId)
  }
}

module.exports = matchApi;
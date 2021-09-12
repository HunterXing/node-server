// 将 queryParams对象转换成whwere条件，除了id是精确查询 ，其他都是模糊查询
const getWhere = queryParams => {
  let where = 'where 1=1';
  for (const key in queryParams) {
    if (key === 'id') {
      where += ` and ${key}='${queryParams[key]}'`;
    } else {
      where += ` and ${key} like '%${queryParams[key]}%'`;
    }
  }
  return where;
}

module.exports = {
  getWhere
}
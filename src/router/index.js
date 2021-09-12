const controllers = require("../controller");
const modals = require("../modal");
const matchApi = require("../utils/matchApi")

const handleRouter = async (req, res) => {
  return matchApi(res, req, controllers, modals)
}

module.exports = handleRouter;
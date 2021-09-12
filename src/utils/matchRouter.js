// Desc: match controller to path
const matchRouter = (path) => {
  // /api/[controller]/[method]
  let routerName = '';
  try {
    routerName = path.split('/')[2];
    if (routerName && routerName?.endsWith('s')) {
      routerName = routerName.slice(0, -1);
    }
  } catch (error) {
    console.error('matchController error:', error);
  }
  return routerName;
}

module.exports = matchRouter
const routes = module.exports = require('next-routes')();

routes
  .add('groupPage', '/groups/:id', 'groups/_id')
const uomRoutes = require('./productuom')

module.exports = (app) => {
  app.use('/uoms', uomRoutes)
}

const productRoutes = require('./product')
const brandRoutes = require('./productbrand')
const categoryRoutes = require('./productcategory')
const lineRoutes = require('./productline')
const manufacturerTypeRoutes = require('./productmanufacturertype')
const statusRoutes = require('./productstatus')
const uenRoutes = require('./productuen')
const uomRoutes = require('./productuom')

module.exports = (app) => {
  app.use('/', productRoutes)
  app.use('/', brandRoutes)
  app.use('/', categoryRoutes)
  app.use('/', lineRoutes)
  app.use('/', manufacturerTypeRoutes)
  app.use('/', statusRoutes)
  app.use('/', uenRoutes)
  app.use('/', uomRoutes)
}

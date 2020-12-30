const { Op } = require("sequelize");
const cleanIntList = data => data.split(',').map(val => parseInt(val.trim()))
const rangeInt = data => {
  const arr = cleanIntList(data)
  if (arr.length === 0) return [0, 0]
  if (arr.length === 1) return [arr[0], 999999]
  return [arr[0], arr[1]]
}

module.exports.where = (req) => {
  const query = req.query
  let filters = {}

  if (query.hasOwnProperty('search')) {
    const search = `%${query.search}%`
    filters[Op.or] = { code: {[Op.iLike]: search}, name: {[Op.iLike]: search}}
  }
  if (query.hasOwnProperty('brand')) filters['brand_id'] = cleanIntList(query.brand)
  if (query.hasOwnProperty('category')) filters['category_id'] = cleanIntList(query.category)
  if (query.hasOwnProperty('line')) filters['line_id'] = cleanIntList(query.line)
  if (query.hasOwnProperty('manufacturer_type')) filters['manufacturer_type_id'] = cleanIntList(query.manufacturer_type)
  if (query.hasOwnProperty('status')) filters['status_id'] = cleanIntList(query.status)
  if (query.hasOwnProperty('uen')) filters['uen_id'] = cleanIntList(query.uen)
  if (query.hasOwnProperty('uom')) filters['uom_id'] = cleanIntList(query.uom)
  if (query.hasOwnProperty('sale_price')) filters['sale_price'] = { [Op.between]: rangeInt(query.sale_price)}

  return filters
}



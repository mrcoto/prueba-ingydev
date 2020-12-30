module.exports.paginate = async (model, req, options) => {
  const limit = req.query.size && /^\d+$/.test(req.query.size) ? +req.query.size : 10
  const page = req.query.page && /^\d+$/.test(req.query.page) ? req.query.page : 0
  const offset = page ? page * limit : 0

  const finalOptions = {limit, offset, ...options}
  const data = await model.findAndCountAll(finalOptions)

  const { count: totalItems, rows: rows } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)

  return { total: totalItems, found: data.rows.length, total_pages: totalPages, current_page: currentPage, data: rows}
}

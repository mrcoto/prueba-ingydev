const models = require('./../models')
const model = models.Product
const query = require('./../queries/product.query')
const pagination = require('./../queries/pagination')

const includes = ['brand', 'category', 'line', 'manufacturer_type', 'status', 'uen', 'uom']

module.exports.paginate = async function(req, res) {
  const data = await pagination.paginate(model, req, {where: query.where(req), include: includes})
  res.json(data)
};

exports.find = async function(req, res) {
  const id = req.params.id
  const detail = await model.findOne({where: {id: id}, include: includes})
  if (detail == null) {
    res.status(404).json({message: 'No encontrado'})
  } else {
    res.json(detail);
  }
};

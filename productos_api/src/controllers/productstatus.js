const models = require('./../models')
const model = models.ProductStatus

module.exports.list = async function(req, res) {
  const data = await model.findAll()
  res.json(data)
};

exports.find = async function(req, res) {
  const id = req.params.id
  const detail = await model.findOne({where: {id: id}})
  if (detail == null) {
    res.status(404).json({message: 'No encontrado'})
  } else {
    res.json(detail);
  }
};

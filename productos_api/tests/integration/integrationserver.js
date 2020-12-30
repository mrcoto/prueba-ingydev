const app = require('./../../src/server')
const supertest = require('supertest')

module.exports = supertest(app)

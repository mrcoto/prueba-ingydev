const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.SERVER_PORT

const helmet = require('helmet')
app.use(helmet())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const compression = require('compression')
app.use(compression())

const cors = require('cors')
app.use(cors())

const morgan = require('morgan')
app.use(morgan('tiny'))

app.listen(port, async () => {
  console.log(`Servidor ejecutandose en http://localhost:${port}`)
})



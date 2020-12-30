const app = require('./src/server')
const port = process.env.SERVER_PORT

app.listen(port, async () => {
  console.log(`Servidor ejecutandose en http://localhost:${port}`)
})



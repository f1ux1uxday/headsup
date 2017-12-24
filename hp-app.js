const express = require('express')
const cors = require('cors')

const app = module.exports = express()

app.use(cors())

app.get('/', (request, response) => {
  response.send('hello')
})

app.get('/api/whoami', (request, response) => {
  let IP_ADDRESS = request.ip
  let HOSTNAME = request.hostname
  let USER_LANG = request.acceptsLanguages()
  let SOFTWARE = request.headers['user-agent']
  response.json({
    ip: IP_ADDRESS,
    hostname: HOSTNAME,
    language: USER_LANG[0],
    software: SOFTWARE,
  })
})

app.listen(3000, () => {
  console.log('served!')
})

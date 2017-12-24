const express = require('express')
const cors = require('cors')
const useragent = require('express-useragent')

const app = module.exports = express()

app.use(cors())
app.use(useragent.express())

app.set('port', process.env.PORT || 3333)

app.get('/', (request, response) => {
  response.send(`To use this API, direct your browser to
  headsup-parser.herokuapp.com/api/whoami`)
})

app.get('/api/whoami', (request, response) => {
  let IP_ADDRESS = request.ip
  let USER_LANG = request.acceptsLanguages()
  let requestAgent = request.useragent
  let PLATFORM = `${requestAgent.os}, ${requestAgent.browser}`
  response.json({
    ip: IP_ADDRESS,
    language: USER_LANG[0],
    platform: SOFTWARE,
  })
})

app.listen(app.get('port'), () => {
  console.log('served!')
})

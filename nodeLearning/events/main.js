const server = require('http').createServer()
server
.on('request', (req, res) => {
  console.log(req.url)
  res.end('OK')
})
.listen(1337, 'localhost')

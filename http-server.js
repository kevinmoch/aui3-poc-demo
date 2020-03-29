var express = require('express')
var compression = require('compression')
var http = require('http')
var path = require('path')
var portrange = 8090
var app = express()

app.use(compression())
app.use('/', express.static(path.resolve(__dirname, './dist/')))

function getPort(cb) {
  var port = portrange
  portrange += 1

  var server = http.createServer()
  server.listen(port, function() {
    server.once('close', function() {
      cb(port)
    })
    server.close()
  })
  server.on('error', function() {
    getPort(cb)
  })
}

getPort(function(port) {
  app.listen(port, function() {
    require('child_process').exec('start chrome http://localhost:' + port + '/vue')
    require('child_process').exec('start chrome http://localhost:' + port + '/react')
  })
})

const http = require('http')

const server = http.createServer(function(req, res) {

    res.write('bem vindo ao gordos')
    res.end()


    
})

server.listen(5000)
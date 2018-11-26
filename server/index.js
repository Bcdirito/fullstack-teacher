const express = require('express')
const server = express()

//MIDDLEWARE SECTION
const parser = require('body-parser')
server.use(parser.json())
server.use(express.static(__dirname + '/../client/dist/index.html'))

const port = 8080
server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})
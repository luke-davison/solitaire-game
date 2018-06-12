const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()

// Middleware
server.use(bodyParser.json())

// Routes
server.use('/', routes)
server.use(express.static('public'))

module.exports = server

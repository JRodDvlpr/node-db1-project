const express = require("express");

const AcctRouter = require('../api/Accounts/accountRouter')

const server = express();

server.use(express.json());

server.use('/api/accounts', AcctRouter)

server.get('/', (req, res) => {
    res.status(200).json({ API: 'Welcome to the DB'})
})

module.exports = server;
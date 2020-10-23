const database = require('../../commons/database')

const createClient = (req, res) => {
    res.json('OK')
}

const getClient = async(req, res) => {
    const client = await database.getClientById(req.params.id)
    res.json(client)
}

const updateClient = (req, res) => {
    res.json('OK')
}
module.exports = {
    createClient,
    getClient,
    updateClient
}
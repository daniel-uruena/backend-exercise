const router = require('express').Router()

const { getClient, createClient, updateClient } = require('./controller')

router.get('/client/:id', getClient)
router.post('/', createClient)
router.put('/:id', updateClient)

module.exports = router
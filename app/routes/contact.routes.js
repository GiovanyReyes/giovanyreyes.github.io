const router = require('express').Router()
const contactController = require('../controllers/contact.controller')()


router.post('/', contactController.postEmail)

module.exports = router 
const path = require('path')
const apiPrefix = '/api/contact'
const emailModel = require('../models/email')
const contactService = require('../services/contact.service')({
    modelService: emailModel
})

module.exports = contactController


function contactController(){
    return{
        postEmail
    }
    function postEmail(req, res){
        contactService.insert(req.body)
        .then((email)=>{
            const responseModel = new responses.ItemsResponses()
            responseModel.items = email
            res.json(responseModel)
        }).catch((err)=>{
            res.status(500).send(new responses.ErrorResponse(err))
        })
    }
}
module.exports = contactService

function contactService(options){
    let Email

    if(!options.modelService){
        throw new Error('Options.modelService is required')
    }
    Email = options.modelService
}

return{
    insert
}

function insert(document){ 
    let email = new Email(document)
    return email.save()

}
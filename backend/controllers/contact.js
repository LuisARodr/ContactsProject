'use strict'
const Contact = require ('./../model/contacts')

async function getContact(ctx){
    // Fetch all Todo’s from the database and return as payload
    const contacs = await Contact.findById(ctx.params.contactId)
    ctx.body = contacs
}

async function getContacts(ctx){
    // Fetch all Todo’s from the database and return as payload
    const contacs = await Contact.find({})
    ctx.body = contacs
}



//pagination maybe
async function getContactsPage(ctx){
    var pageOptions = {
        page: parseInt(ctx.query.page) || 0,
        limit: parseInt(ctx.query.limit) || 10
    };
    
    let contacts = null;

    contacts = await Contact.find()
    .skip(pageOptions.page*pageOptions.limit)
    .limit(pageOptions.limit)
    ctx.body = contacts
}

async function saveContact(ctx){        
    console.log('Post /api/contact')
    console.log(ctx.request.body)
    const newContact = new Contact(ctx.request.body)
    const savedContact = await newContact.save()
    ctx.body = savedContact
}

async function updateContact(ctx){
    // Find contact based on id, then toggle done on/off
    const id = ctx.params.contactId
    if(validateMail(ctx.request.body.email) 
        &&validateOnlyNumbers(ctx.request.body.phoneNumber)
        &&validateOnlyLetters(ctx.request.body.name)
        &&validateOnlyLetters(ctx.request.body.lastName)
        &&validateAlphanumeric(ctx.request.body.company)){
        const contact = await Contact.findByIdAndUpdate(id, ctx.request.body)
        ctx.body = contact
    }
}

async function deleteContact(ctx){
    // Get id from url parameters and find Todo in database
    const id = ctx.params.contactId
    const contact = await Contact.findById(id)

    // Delete todo from database and return deleted object as reference
    const deletedContact = await contact.remove()
    ctx.body = deletedContact
}

module.exports = {
    getContact,
    getContacts,
    saveContact,
    updateContact,
    deleteContact,
    //pagination maybe
    getContactsPage
}

//dont look at this, quick fix
//validations
function validateOnlyLetters (value){
    return /^[a-z]+$/i.test(value);
}
function validateAlphanumeric (value){
    return  /^[a-z1-9]+$/i.test(value);
}
function validateOnlyNumbers (value){
    return  /^[\d]+$/i.test(value);
}
function validateMail (value){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}
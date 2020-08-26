const Contact = require('../models/Contact');

//GET
const getAllContact = (req, res, next) => {
    Contact.find().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error Occured",
            error: err
        });
    });
}

//GET with ID
const getSingleContact = (req, res, next)=>{
    //extracting id from url
    let id = req.params.id;
    Contact.findById(id).then(data=>{
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error Occured",
            error: err
        });
    });
    
}

//POST save a new contact
const addNewContact = (req, res, next)=>{
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    //now save the contact into database
    contact.save().then(data => {
        res.status(201).json({
            message: "Contact Added"
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error Occured",
            error: err
        });
    });
}

//PUT update a contact
const updateSingleContact = (req, res, next)=>{
    let id = req.params.id;
    let updatedContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }

    Contact.findByIdAndUpdate(id,{$set: updatedContact}).then(result=>{
        
        //To get updated contact as res
        Contact.findById(result._id).then(newContact =>{
            res.json({
                message: "Updated Successfully.",
                contact: newContact
            });
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error Occured",
            error: err
        });
    });
}

//DELETE a contact
const deleteSingleContact = (req, res, next)=>{
    let id = req.params.id;
    Contact.findByIdAndRemove(id).then(result=>{
        res.json({
            message: "Contact Deleted",
            result: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error Occured",
            error: err
        });
    });
}


module.exports = {
    getAllContact,
    getSingleContact,
    addNewContact,
    updateSingleContact,
    deleteSingleContact
};
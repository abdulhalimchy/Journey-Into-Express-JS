const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

//GET all contact
router.get('/', contactController.getAllContact);

//GET a single contact
router.get('/:id', contactController.getSingleContact);

// POST a contact
router.post('/', contactController.addNewContact);

//DELETE a contact
router.delete('/:id', contactController.deleteSingleContact);

//PUT update a contact
router.put('/:id', contactController.updateSingleContact);


//exporting router
module.exports = router;
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const authenticate = require('../middleware/authenticate');

//GET all contact
router.get('/', contactController.getAllContact);

//GET a single contact
router.get('/:id', contactController.getSingleContact);

// POST a contact, if is user logged in alreadly
router.post('/', authenticate, contactController.addNewContact);

//DELETE a contact, if user is logged in alreadly
router.delete('/:id', authenticate , contactController.deleteSingleContact);

//PUT update a contact, if user is logged in alreadly
router.put('/:id', authenticate, contactController.updateSingleContact);


//exporting router
module.exports = router;
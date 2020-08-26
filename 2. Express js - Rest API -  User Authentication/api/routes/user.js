const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticate = require('../middleware/authenticate');

//Register a user
router.post('/register', userController.registerUser);

//Login user
router.post('/login', userController.loginController);

//GET all users, If the user is alreadly logged in
router.get('/', authenticate ,userController.getAllUser);

module.exports = router;
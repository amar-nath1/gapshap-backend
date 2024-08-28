// routes/userRoutes.js

const express = require('express');
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/loginController');
const { saveMessage, getMessages } = require('../controllers/chatMessageController');

const router = express.Router();

// Route for user signup
router.post('/login', loginUser);
router.post('/signup', registerUser);
router.post('/message', saveMessage);
router.get('/message', getMessages);


module.exports = router;

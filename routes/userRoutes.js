// routes/userRoutes.js

const express = require('express');
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/loginController');

const router = express.Router();

// Route for user signup
router.post('/login', loginUser);
router.post('/signup', registerUser);


module.exports = router;

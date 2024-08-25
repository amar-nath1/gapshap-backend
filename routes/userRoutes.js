// routes/userRoutes.js

const express = require('express');
const { registerUser } = require('../controllers/userController');

const router = express.Router();

// Route for user signup
router.post('/signup', registerUser);

module.exports = router;

// controllers/userController.js

const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const userId = await User.create(username, email, hashedPassword);

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { registerUser };

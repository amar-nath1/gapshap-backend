// controllers/userController.js

const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();
const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body,'boddya')

  try {
    // Check if the user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      const secretKey = crypto.randomBytes(64).toString('hex');

      const { password } = req.body;
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'User not authorized' });
    }
    else {
      const token = jwt.sign({ emailId: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
    }
    
    }
    else {
      return res.status(200).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal bhak server error' });
  }
};

module.exports = { loginUser };

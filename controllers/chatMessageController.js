// controllers/userController.js

const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Chat = require('../models/chatModel')
require('dotenv').config();


  const saveMessage = async (req, res) => {
    const { email, message } = req.body;
  
    try {
      if (!email || !message) {
        return res.status(400).json({ error: 'User ID and message are required' });
      }
  
      const messageId = await Chat.saveMessage(email, message);
      res.status(201).json({ message: 'Message saved successfully', messageId });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  const getMessages = async (req, res) => {
    try {
      const messages = await Chat.getMessages();
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

module.exports = { saveMessage, getMessages };

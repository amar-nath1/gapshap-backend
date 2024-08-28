// models/userModel.js

const db = require('../config/db');

const Chat = {
  saveMessage: async (email, message) => {
    const [results] = await db.query(
      'INSERT INTO messages (email, message) VALUES (?, ?)',
      [email, message]
    );
    return results.insertId;
  },

  getMessages: async () => {
    const [results] = await db.query('SELECT * FROM messages ORDER BY created_at DESC');
    return results;
  }
};

module.exports = Chat;

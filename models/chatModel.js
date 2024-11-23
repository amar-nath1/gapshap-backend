// models/userModel.js

const db = require('../config/db');

const Chat = {
  saveMessage: async (email, message) => {
    const [results] = await db.query(
      'INSERT INTO messages (email, message) VALUES (?, ?)',
      [email, message]
    );

    // Retrieve the inserted row
  const [selectResult] = await db.query(
  'SELECT * FROM messages WHERE id = ?',
  [results.insertId]
);

    return selectResult[0];
  },

  getMessages: async (skip) => {
    // const limit = 100; 
    const offset = skip || 0;
    const [results] = await db.query(`SELECT * FROM messages ORDER BY created_at ASC`);
    console.log(results,'results')
    return results;
  }
};

module.exports = Chat;

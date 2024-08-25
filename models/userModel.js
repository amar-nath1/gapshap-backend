// models/userModel.js

const db = require('../config/db');

const User = {
  findByEmail: async (email) => {
    const [results] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return results[0];
  },

  create: async (username, email, hashedPassword) => {
    const [results] = await db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    return results.insertId;
  }
};

module.exports = User;

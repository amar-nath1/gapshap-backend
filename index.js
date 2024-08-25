// index.js

const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')
// const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

// Load the user routes
app.use('/api/users', userRoutes);

// Error handling middleware
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const phoneRoutes = require('./routes/phoneRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', phoneRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

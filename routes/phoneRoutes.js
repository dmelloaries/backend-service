// routes/phoneRoutes.js
const express = require('express');
const PhoneNumber = require('../models/PhoneNumber');
const router = express.Router();

/**
 * GET /api/phones
 * Fetches all phone numbers with only the name, _id, and phone fields
 */
router.get('/phones', async (req, res) => {
  try {
    // Use Mongoose `.find()` with `.select()` to fetch specific fields
    const phones = await PhoneNumber.find().select('name phone');
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch phone numbers', error });
  }
});

module.exports = router;

// models/PhoneNumber.js
const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('PhoneNumber', phoneNumberSchema);

// seed/seedPhones.js
const mongoose = require('mongoose');
const PhoneNumber = require('../models/PhoneNumber');
const connectDB = require('../config/database');
require('dotenv').config()
const seedPhones = async () => {
  await connectDB();

  const phones = [
    { name: 'Aries', phone: '8446917747' },
    { name: 'Rishi', phone: '9136361465' },
    { name: 'Dishit', phone: '9819378129' },
  ];

  try {
    await PhoneNumber.insertMany(phones);
    console.log('Phone numbers seeded successfully');
    process.exit(0); // Exit after seeding
  } catch (error) {
    console.error('Error seeding phone numbers:', error.message);
    process.exit(1);
  }
};

seedPhones();

const mongoose = require('mongoose');

// Define a Mongoose schema for the contact form data
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Create a MongoDB model for the contact form data
module.exports = mongoose.model('Message', messageSchema);

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Message = require('./Message'); // Import the Message model

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB (Replace with your MongoDB connection URI)
mongoose.connect('mongodb+srv://aynas2112:P5a3pNlHSHMfME6P@cluster0.opc5u4k.mongodb.net/?retryWrites=true&w=majority', {
    dbName:'Message',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a route to handle form submissions
app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received a request to /submit'); // Add this line for logging

  try {
    // Create a new message document using the Message model
    const newMessage = new Message({
      name,
      email,
      message,
    });

    // Save the new message to the database
    await newMessage.save();

    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error submitting contact form.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

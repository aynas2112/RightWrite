import React, { useState } from 'react';
import { Typography, Paper, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2), // Add padding to the root element
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3), // Add margin to increase space between the form and footer
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2), // Add space between form elements
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  // Update your backend URL
  const backendURL = 'https://scriptologic-api-inky.vercel.app/';

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${backendURL}/submit`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setMessage('Contact form submitted successfully.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setMessage('Error submitting the contact form. Please try again later.');
      }
    } catch (error) {
      setMessage('Error submitting the contact form. Please try again later.');
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Paper elevation={3} className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
        {message && <Typography variant="body1">{message}</Typography>}
      </Paper>
      {/* Footer or other content */}
    </div>
  );
};

export default Contact;
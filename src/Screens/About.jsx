import React from 'react';
import {  Grid, Typography, Paper, Box } from '@mui/material';
import personImage from '../Components/mom.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#041C32', // Dark background color
    color: '#fff', // Light font color
    padding: theme.spacing(4), // Add some padding
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden', // Hide any overflow from the image
    transition: 'transform 0.3s ease', // Add a smooth transition effect
    '&:hover': {
      transform: 'scale(1.1)', // Scale the image slightly on hover
    },
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease', // Match the transition with the container
  },
  quote: {
    marginTop: theme.spacing(2),
    fontStyle: 'italic',
  },
  rightColumn: {
    marginLeft: '15%', // Add margin to move the column to the right
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6} className={classes.column}>
          <Typography variant="h1" gutterBottom>
            Mamta Chawla
          </Typography>
          <Typography variant="body1" paragraph>
           <p> I'm a woman of many roles, each adding its own rich color to my life's canvas.</p>

            <p>Firstly, I'm a proud mother. It's a role that constantly teaches me, fills me with joy, and shows me the true meaning of love. Witnessing my children's growth and being their guiding light is an incredible journey.</p>

            <p>As a homemaker, I find immense pleasure in crafting a warm and inviting haven for my family. My home is a reflection of us, and I revel in the finer details, from arranging fresh blooms to experimenting with culinary creations.</p>

            <p>Teaching is my profession, and my classroom is where I shine. It's my creative space, where I mold young minds, share knowledge, and ignite the spark of curiosity. Every day, I learn as much from my students as they do from me.</p>

            <p>My hidden passion is graphology. It might seem unusual, but deciphering handwriting has fascinated me for years. Handwriting is a window to one's personality, and I find the process of unveiling these secrets incredibly captivating.</p>

            <p>In all my roles, I give my all. Passion fuels my endeavors. Whether it's making a house a home, inspiring young hearts, or exploring the world of graphology, I tackle each challenge with zest and commitment.</p>

            <p>Life's journey is beautiful, and I'm grateful for the diverse experiences that have shaped me. My family, my students, my home, and my love for graphology all contribute to the vibrant tapestry of my life.</p>





          </Typography>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4} className={`${classes.column} ${classes.rightColumn}`}>
          <Paper elevation={3}>
            <Box p={3} className={classes.imageContainer}>
              <Typography variant="h6" className={classes.quote}>
                "Passion is energy. Feel the power that comes from focusing on what excites you-Oprah Winfrey"
              </Typography>
              <img src={personImage} alt="Person" className={classes.image} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;

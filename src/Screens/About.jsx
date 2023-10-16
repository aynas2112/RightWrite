import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import personImage from '../Components/mom.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#041C32', // Dark background color
    color: '#fff', // Light font color
    padding: theme.spacing(4), // Add some padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    minHeight: '100vh', // Ensure the container takes at least the full viewport height
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
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
    marginLeft: theme.spacing(2), // Add margin to the right of the image
  },
  quote: {
    marginTop: theme.spacing(2),
    fontStyle: 'italic',
    marginLeft: theme.spacing(2), // Add margin to the right of the quote
  },
  paragraphs: {
    marginTop: theme.spacing(6), // Add margin to the top of the paragraphs
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Mamta Chawla
      </Typography>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6} className={classes.column}>
          <div className={classes.paragraphs}>
            <Typography variant="body1" paragraph>
              I'm a woman of many roles, each adding its own rich color to my life's canvas.
            </Typography>
            <Typography variant="body1" paragraph>
              Firstly, I'm a proud mother. It's a role that constantly teaches me, fills me with joy, and shows me the true meaning of love. Witnessing my children's growth and being their guiding light is an incredible journey.
            </Typography>
            <Typography variant="body1" paragraph>
              As a homemaker, I find immense pleasure in crafting a warm and inviting haven for my family. My home is a reflection of us, and I revel in the finer details, from arranging fresh blooms to experimenting with culinary creations.
            </Typography>
            <Typography variant="body1" paragraph>
              Teaching is my profession, and my classroom is where I shine. It's my creative space, where I mold young minds, share knowledge, and ignite the spark of curiosity. Every day, I learn as much from my students as they do from me.
            </Typography>
            <Typography variant="body1" paragraph>
              My hidden passion is graphology. It might seem unusual, but deciphering handwriting has fascinated me for years. Handwriting is a window to one's personality, and I find the process of unveiling these secrets incredibly captivating.
            </Typography>
            <Typography variant="body1" paragraph>
              In all my roles, I give my all. Passion fuels my endeavors. Whether it's making a house a home, inspiring young hearts, or exploring the world of graphology, I tackle each challenge with zest and commitment.
            </Typography>
            <Typography variant="body1" paragraph>
              Life's journey is beautiful, and I'm grateful for the diverse experiences that have shaped me. My family, my students, my home, and my love for graphology all contribute to the vibrant tapestry of my life.
            </Typography>
          </div>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4} className={classes.column}>
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

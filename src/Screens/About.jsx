import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import personImage from '../Components/mom.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#041C32', // Dark background color
    color: '#fff', // Light font color
    padding: theme.spacing(2), // Add some padding, reduced from 4 to 2
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
    marginLeft: 0, // Remove margin for small screens
    [theme.breakpoints.up('md')]: {
      marginLeft: '15%', // Add margin for medium and larger screens
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6} className={classes.column}>
          <Typography variant="h5" gutterBottom> {/* Adjusted the typography variant */}
            Mamta Chawla
          </Typography>
          <Typography variant="body2" paragraph> {/* Adjusted the typography variant */}
            {/* Your paragraphs */}
          </Typography>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4} className={`${classes.column} ${classes.rightColumn}`}>
          <Paper elevation={3}>
            <Box p={3} className={classes.imageContainer}>
              <Typography variant="body2" className={classes.quote}> {/* Adjusted the typography variant */}
                "Passion is energy. Feel the power that comes from focusing on what excites you - Oprah Winfrey"
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

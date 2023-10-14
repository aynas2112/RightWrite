import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, createTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image from './me.jpg';
import { makeStyles } from '@mui/styles';
import { create } from '@mui/material/styles/createTransitions';



const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 550,
    margin: 'auto',
    marginTop: theme.spacing(140),
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s ease-in-out', // Add a transition for the 'transform' property
    '&:hover': {
      transform: 'translateY(-5px) rotate(-8deg)', // Apply a translation and rotation on hover
    },
  },
  media: {
    height: 300,
  },
  button: {
    margin: theme.spacing(2),
  },
  cardContainer: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
  },
}));


const CardWithPicture = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/about');
  };

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Mamta Chawla"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Mamta Chawla
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Graphologist, Entrepreneur...
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleReadMoreClick}
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardWithPicture;

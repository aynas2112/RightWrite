import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image from './me.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 550,
    margin: 'auto',
    marginTop: theme.spacing(5), // Adjusted margin for smaller screens
    position: 'relative',
    zIndex: 1,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px) rotate(-8deg)',
    },
  },
  media: {
    height: 300,
  },
  button: {
    margin: theme.spacing(2),
  },
  cardContainer: {
    position: 'relative', // Adjusted to 'relative' for stacking order
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
        <CardMedia className={classes.media} image={image} title="Mamta Chawla" />
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

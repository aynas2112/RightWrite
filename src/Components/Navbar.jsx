import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ADD8E6', // Set the background color to light blue
    boxShadow: 'none',
  },
  navButton: {
    color: '#0A2647',
    textDecoration: 'none',
  },
  spacer: {
    flexGrow: 1, // Create a spacer that pushes buttons to the right
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.spacer} />
        <Button component={Link} to="/" className={classes.navButton}>
          Home
        </Button>
        <Button component={Link} to="/about" className={classes.navButton}>
          About
        </Button>
        <Button component={Link} to="/contact" className={classes.navButton}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

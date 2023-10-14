import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ADD8E6',
    boxShadow: 'none',
  },
  navButton: {
    color: '#fff', // Set the text color to white
    textDecoration: 'none',
  },
  spacer: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.spacer} />
        <Button style={{color:'white'}} component={Link} to="/" classes={{root:classes.navButton}}>
          Home
        </Button>
        <Button style={{color:'white'}} component={Link} to="/about" className={classes.navButton}>
          About
        </Button>
        <Button style={{color:'white'}} component={Link} to="/contact" className={classes.navButton}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

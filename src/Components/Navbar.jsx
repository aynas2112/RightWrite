import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import { makeStyles } from '@mui/styles';
import Hidden from '@mui/material/Hidden';

const drawerWidth = 240; // Width of the drawer

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ADD8E6',
    boxShadow: 'none',
  },
  navButton: {
    color: '#fff',
    textDecoration: 'none',
  },
  spacer: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none', // Hide the menu button for medium-sized screens and larger
    },
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' },
    { text: 'Blogs', link: '/blogs' },
  ];

  const drawer = (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text} component={Link} to={item.link}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Hidden mdUp>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <div className={classes.spacer} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smDown>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <div className={classes.spacer} />
            <Button style={{ color: '#fff' }} component={Link} to="/" className={classes.navButton}>
              Home
            </Button>
            <Button style={{ color: '#fff' }} component={Link} to="/about" className={classes.navButton}>
              About
            </Button>
            <Button style={{ color: '#fff' }} component={Link} to="/contact" className={classes.navButton}>
              Contact
            </Button>
            <Button style={{ color: '#fff' }} component={Link} to="/blogs" className={classes.navButton}>
              Blogs
            </Button>
          </Toolbar>
        </AppBar>
      </Hidden>

      {/* Mobile drawer */}
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

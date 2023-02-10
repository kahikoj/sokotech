import React from 'react';
import { makeStyles } from '@mui/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/contacts" label="Contact" icon={<ContactMailIcon />} />
    </BottomNavigation>
  );
};

export default Footer;

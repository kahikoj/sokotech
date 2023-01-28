import React from 'react';
import { makeStyles } from '@mui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
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

import React from "react";
import {  ThemeProvider , makeStyles } from '@mui/styles';
import { createTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchBar from "./SearchBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing.unit * 2
  },
  title: {
    flexGrow: 1
  },
  search: {
    marginRight: theme.spacing(2)
  }
}));

const NavBar = ({ products }) => {
  const classes = useStyles();
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                    >
                      <MenuIcon />
                      </IconButton>
            <Typography variant="h6" className={classes.title}>
                My Website
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
                <Button color="inherit">About</Button>
            <div className={classes.search}>
              <SearchBar products={products} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
    
  );
};

export default NavBar;
import React from "react";
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchBar from "./SearchBar";


const useStyles = makeStyles({
  root: {
    borderRadius: 12,
    backgroundColor: "blue"
  },
  //    search: {
  //      borderRadius: 5,
  //   }
});

// const useStyles = makeStyles(theme => 
//   createStyles({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(1, 'auto'),
//   },
//   title: {
//     flexGrow: 1
//   },
//   search: {
//     marginRight: theme.spacing(1, 'auto'),
//   }
// }));

const NavBar = ({ products }) => {
  const classes = useStyles();
  const theme = createTheme({ spacing: 8 });

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
               
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
                <Button color="inherit">About</Button>
            {/* <div className={classes.search}>
              <SearchBar products={products} />
            </div> */}
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
    
  );
};

export default NavBar;

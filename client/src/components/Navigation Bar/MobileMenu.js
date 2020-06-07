import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import { ProductConsumer } from "../../context"

const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    marginBottom: '60px'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menu: {
    display: 'block',
    justifyContent: 'center',
    margin: '0 auto',
    
  },
  menuItem: {
    padding: '10px',
    justifyContent: 'center',
    color: '#2D2D2D'
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #2D2D2D',
    borderRadius: '40px',
    padding: '8px',
    background: 'white',
    color: '#2D2D2D',
    margin: ' 0 -20%'
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'transparent'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '100%'
  },
  title: {
    fontFamily: 'Yeseva One',
    alignItems: 'center',
    padding: '10px',
    textDecoration: 'none',
    color: '#2D2D2D', 
    display: 'block',
    margin: '0 auto' 
  },
  count: {
    fontSize: '12px',
    fontWeight: 'bold',
    background: '#2D2D2D',
    color: '#fff',
    padding: '0 5px',
    verticalAlign: 'top',
    position: 'absolute',
    borderRadius: '50%',
    marginTop: '-10px'
  },
  cartIcon: {
    alignItems: 'center',
    
    
  }

 
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <ProductConsumer>
            {value => {
                const { count } = value.detailProduct;
            return (
              <div className={classes.nav}>
                <div>
                <Link to='/'  style={{textDecoration: 'none'}}>
                <Typography variant="h4" className={classes.title}>
                  Coffee Shop
                </Typography>
                </Link>
                </div>
                <div>
                <Link to='/cart' style={{color: '#2D2D2D'}}>
                <ShoppingCartIcon className={classes.cartIcon}/>
                <span className={classes.count}>{count}</span> 
                </Link>
                </div>
             </div>
          );
        }}
       
            </ProductConsumer>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </div>
       
        <List className={classes.menu}>

          <Link to='/' onClick={handleDrawerClose} style={{textDecoration: 'none'}}>
            <ListItem button >
            <ListItemIcon><LocalCafeIcon /></ListItemIcon>
              <ListItemText primary="Shop" className={classes.menuItem}/>
            </ListItem>
          </Link>

          <Link to='/users/login' onClick={handleDrawerClose} style={{textDecoration: 'none'}}>
            <ListItem button >
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Login" className={classes.menuItem}/>
            </ListItem>
          </Link>

          <Link to='/cart' onClick={handleDrawerClose} style={{textDecoration: 'none'}}>
            <ListItem button >
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText primary="Cart" className={classes.menuItem}/>
            </ListItem>
          </Link>

            <ListItem >
            <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              type="search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <button type='submit' className={classes.button}>
            <SearchIcon  onClick={handleDrawerClose} />
            </button>
          </div>
            </ListItem>
        </List>
        
        
      </Drawer>
      
    </div>
  );
}

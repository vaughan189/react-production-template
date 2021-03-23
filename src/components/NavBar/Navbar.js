import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Btn } from '../Controls/Button/Button';
import SideNav from '../SideNav/SideNav';

import * as userActions from '../../state/Login/Action';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const toggleSideMenu = useRef(null);

  function logout() {
    dispatch(userActions.logout());
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleSideMenu.current.toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Boilerplate Template
          </Typography>
          <Btn text="Logout" handleClick={logout} />
        </Toolbar>
      </AppBar>
      <SideNav ref={toggleSideMenu} />
    </div>
  );
}

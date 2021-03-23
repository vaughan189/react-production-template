import React, { useImperativeHandle } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';

import History from '../../routes/History';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SideNav = React.forwardRef((_props, ref) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useImperativeHandle(ref, () => ({
    toggleDrawer: toggleDrawer('left', true),
  }));

  const routeChange = (path) => {
    History.push(path);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => routeChange('home')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => routeChange('my-posts')}>
          <ListItemIcon>
            <LocalPostOfficeIcon />
          </ListItemIcon>
          <ListItemText primary="My Posts" />
        </ListItem>
        <ListItem button onClick={() => routeChange('search')}>
          <ListItemIcon>
            <SearchOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button onClick={() => routeChange('profile')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor={'left'}
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
});

export default SideNav;

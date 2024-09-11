import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import useIsDesktop from '../../utils/hooks';
import { useStyles } from '../../styles/components/header';

const Header = () => {
  const classes = useStyles();
  const isDesktop = useIsDesktop();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <Typography variant='h6' className={classes.title}>
        Tera Fantastica
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem>
          <ListItemText primary='About' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Contact' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {isDesktop && (
            <Typography variant='h6' className={classes.title}>
              Tera Fantastica
            </Typography>
          )}
          {!isDesktop && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Drawer
            anchor='left'
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{ style: { height: '100%' } }}
          >
            {drawerContent}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

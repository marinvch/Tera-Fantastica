import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, IconButton, Toolbar } from '@mui/material';
import { useIsDesktop } from '../../utils/hooks';
import { useStyles } from './styles/header';
import Navigation from './Sidebar';
import Logo from './Logo';

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

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {isDesktop && <Logo />}

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
            <Navigation onClick={() => toggleDrawer(false)} />
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

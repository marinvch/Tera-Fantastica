import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useStyles } from './styles/sidebar';
import { useIsDesktop } from '../../utils/hooks';
const Sidebar = ({ onClick }: { onClick?: () => void }) => {
  const classes = useStyles();
  const isDesktop = useIsDesktop();
  return (
    <div className={classes.navigation}>
      <div role='presentation' onClick={onClick} onKeyDown={onClick}>
        <List>
          {!isDesktop && (
            <Typography variant='h6' className={classes.title}>
              Tera Fantastica
            </Typography>
          )}
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
    </div>
  );
};

export default Sidebar;

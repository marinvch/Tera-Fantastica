import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './styles/sidebar';
import Logo from './Logo';
import { useIsDesktop } from '../../utils/hooks';

const Sidebar = ({ onClick }: { onClick?: () => void }) => {
  const classes = useStyles();
  const isDesktop = useIsDesktop();

  return (
    <div className={classes.navigation}>
      <div role='presentation' onClick={onClick} onKeyDown={onClick}>
        <List>
          {!isDesktop && <Logo />}
          <ListItem component={Link} to='/newspapper' className={classes.listItem}>
            <ListItemText primary='Вестник' />
          </ListItem>
          <ListItem component={Link} to='/books' className={classes.listItem}>
            <ListItemText primary='Книги' />
          </ListItem>
          <ListItem component={Link} to='/magazines' className={classes.listItem}>
            <ListItemText primary='Списания' />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;

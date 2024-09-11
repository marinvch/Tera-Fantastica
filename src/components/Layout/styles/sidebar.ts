import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: '16px',
  },

  title: {
    flexGrow: 1,
  },

  navigation: {
    display: 'flex',
    flexDirection: 'column',
    width: '150px',
    flex: 1, // This will make the navigation take the remaining space
  },
}));

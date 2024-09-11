import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: '16px',
  },

  navigation: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    width: '150px',
    flex: 1, // This will make the navigation take the remaining space
  },
  listItem: {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  layoutWrapper: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  container: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  contentWrapper: {
    flexGrow: 1,
    display: 'flex',

    justifyContent: 'center',
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },

  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

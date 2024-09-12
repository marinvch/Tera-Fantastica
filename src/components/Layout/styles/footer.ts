import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(2),
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
  },
}));

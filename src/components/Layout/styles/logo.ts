import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
}));

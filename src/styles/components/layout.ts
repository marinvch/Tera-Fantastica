import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  layoutWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    margin: '0 auto',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

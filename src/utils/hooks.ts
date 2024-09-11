import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const useIsDesktop = (): boolean => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return isDesktop;
};

export default useIsDesktop;

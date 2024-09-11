import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useIsDesktop = (): boolean => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return isDesktop;
};

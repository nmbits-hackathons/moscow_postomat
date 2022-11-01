import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import NewsImg from '../../../../assets/news.png';

export const Settings = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        zIndex: 1000,
        marginLeft: '96px',
        padding: '103px 15px 15px 15px',
        display: 'flex',
        background: theme.palette.action.hover,
        minHeight: '100vh',
        width: '100%',
      }}
    >
      Settings
    </Box>
  );
};

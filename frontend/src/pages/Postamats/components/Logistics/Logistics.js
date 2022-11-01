import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export const Logistics = () => {
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
      Logistics
    </Box>
  );
};

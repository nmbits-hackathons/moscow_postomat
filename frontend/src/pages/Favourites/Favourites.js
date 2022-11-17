import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Maps, FavouritesCards } from './components';
export const Favourites = () => {
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
      <FavouritesCards />

      <Maps />
    </Box>
  );
};

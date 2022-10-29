import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// TODO - сделать по дизайну
export const Header = () => {
    const theme = useTheme()

    return (
         <Box sx={{
             position: 'absolute',
             zIndex: 1000,
             top: '8px',
             right: '16px',
             left:`96px`,
             display: 'flex',
             background: 'none',
             color: '#9EA2B0',
             width: `calc(100% - (96px + 16px))`,
             height: '80px',
         }}>
              <Toolbar sx={{
                  width: '100%',
                  marginLeft: '20px',
                  background: theme.palette.background.default,
                  borderRadius: '20px',
              }}>
                   <Typography variant="h6" noWrap component="div">
                       Mini variant drawer
                   </Typography>
              </Toolbar>
         </Box>
)}

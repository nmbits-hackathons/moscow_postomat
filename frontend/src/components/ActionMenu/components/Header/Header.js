import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// TODO - сделать по дизайну
export const Header = () => {
    const theme = useTheme()

    return (
        <>
            <Box sx={{position: 'absolute', zIndex: 1000, left:`calc(100% - calc(100% - 96px - 398px))`, display: 'flex', background: theme.palette.background.default, color: '#9EA2B0', width: `calc(100% - 96px - 398px)`}}>
               <Toolbar sx={{width: '100%'}}>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
              </Toolbar>
            </Box>
        </>
)}

import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export const Filters = () => {
    const theme = useTheme()

    let location = useLocation();
    const path = location.pathname
    if (path !== "/") return
    return <div>
        <Box  sx={{ position: "absolute", left: '96px', top: 0, bottom: 0, display: 'flex', width: '398px', height: '100vh', margin: '0 10px 0 0', background: theme.palette.background.default, zIndex: 1000 }}>
            sd
        </Box>
    </div>
}

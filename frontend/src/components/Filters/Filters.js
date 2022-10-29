import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export const Filters = () => {
    const theme = useTheme()

    let location = useLocation();
    const path = location.pathname
    if (path !== "/") return
    return  (
    <Box sx={{
        position: "absolute",
        left: '116px',
        top: '96px',
        bottom: "12px",
        display: 'flex',
        width: '398px',
        margin: '0 10px 0 0',
        background: theme.palette.background.default,
        zIndex: 1000,
        borderRadius: '20px',
        padding: '20px 24px 24px 24px'
    }}>
            sd
    </Box>
)}

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

export const SideBar = () => {
    const theme = useTheme()
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        () => ({
            width: '96px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
        }),
    );
        // TODO - прокинуть иконки и действия открытия нужного меню
    return  <Box sx={{ display: 'flex', position: 'absolute', left: 0, top: 0, bottom: 0, width: '96px', zIndex: '1000', background: theme.palette.background.default }}>
                <Drawer variant="permanent" open={false}>
                 </Drawer>
            </Box>
}

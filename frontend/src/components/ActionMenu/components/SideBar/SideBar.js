import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

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
    return  <Box sx={{ display: 'flex', minWidth: '96px', height: '100%', zIndex: '1000', background: theme.palette.background.default }}>
                <Drawer variant="permanent" open={false} sx={{minWidth: '96px',  height: '100%',}}>
                    <List>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                 <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"test"} sx={{ opacity: 1 }} />
                        </ListItemButton>
                    </List>
                 </Drawer>
            </Box>
}

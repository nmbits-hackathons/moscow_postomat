import {Header, ThemeMode, SideBar} from "./components";
import {Filters} from "./components/Header/components/Filters";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const ActionMenu = ({handleChangeMode}) => {
    const theme = useTheme()

    return <Box sx={{ display: 'flex', backgroundColor: theme.palette.text.disabled, width: '100%'}}>
        <SideBar />
        <Filters />
        <Header />
        <ThemeMode handleChangeMode={handleChangeMode}/>
    </Box>
}

export default ActionMenu

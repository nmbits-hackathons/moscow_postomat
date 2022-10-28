import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Maps from "../Maps"
import ActionMenu from "../../components/ActionMenu";
import './App.css';
import {useState} from "react";

const darkThemeMode = 'dark'
const lightThemeMode = 'light'

function App() {
    const handleTest = (map) => {
        console.log(map)
    }
    const [mode, setMode] = useState(lightThemeMode)
    const theme = createTheme({
        palette: {
            mode,
        },
    });

    const handleChangeMode = () => {
        setMode(prev => prev === lightThemeMode ? darkThemeMode : lightThemeMode)
    }
    return (
            <ThemeProvider theme={theme}>
                <ActionMenu handleChangeMode={handleChangeMode}/>
                <CssBaseline />
                <Maps {...{handleTest}} />
            </ThemeProvider>
        )
}

export default App;

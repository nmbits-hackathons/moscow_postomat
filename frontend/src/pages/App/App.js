import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Maps from "../Maps"
import ActionMenu from "../../components/ActionMenu";
import './App.css';
import {useState} from "react";
import {darkModeStyle, lightMapStyle} from "../Maps/Maps";

export const darkThemeMode = 'dark'
export const lightThemeMode = 'light'

function App() {
    const [map, setMap] = useState(null)
    const handleTest = (map) => {
        setMap(map)
    }
    const [mode, setMode] = useState(lightThemeMode)
    const theme = createTheme({
        palette: {
            mode,
        },
    });

    const handleChangeMode = () => {
        setMode(prev => prev === lightThemeMode ? darkThemeMode : lightThemeMode)
        map.setStyle(mode === darkThemeMode ? lightMapStyle : darkModeStyle)
    }
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <ActionMenu handleChangeMode={handleChangeMode}/>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<Maps {...{handleTest, mode}} /> }>
                    </Route>
                </Routes>

            </ThemeProvider>
        </BrowserRouter>
        )
}

export default App;

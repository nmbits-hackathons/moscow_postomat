import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Maps from "../Maps"
import './App.css';
import {useState} from "react";
import {darkModeStyle, lightMapStyle} from "../Maps/Maps";
import { Favourites } from '../Favourites'
import { Analytics } from '../Analytics'
import { News } from '../News'
import {Header} from '../../components/Header'
import {SideBar} from '../../components/SideBar'
import {ANALYTICS_PATH, FAVOURITES_PATH, MAIN_PATH, NEWS_PATH} from "../../constants/path";

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
                <SideBar {...{handleChangeMode, mode}} />
                <Header />
                <CssBaseline />
                <Routes>
                    <Route path={MAIN_PATH} element={<Maps {...{handleTest, mode}} /> } />
                    <Route path={FAVOURITES_PATH} element={<Favourites /> } />
                    <Route path={ANALYTICS_PATH} element={<Analytics /> } />
                    <Route path={NEWS_PATH} element={<News /> } />
                </Routes>

            </ThemeProvider>
        </BrowserRouter>
        )
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Maps from '../Maps';
import './App.css';
import { useState } from 'react';
import { darkModeStyle, lightMapStyle } from '../Maps/Maps';
import { Favourites } from '../Favourites';
import { Documents } from '../Documents';
import { News } from '../News';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import {
  DOCUMENTS_PATH,
  FAVOURITES_PATH,
  MAIN_PATH,
  NEWS_PATH,
  POSTAMATS_ANALYTICS_PATH,
  POSTAMATS_LOGISTICS_PATH,
  POSTAMATS_PATH,
  POSTAMATS_SETTINGS_PATH,
} from '../../constants/path';
import { Analytics, Logistics, Settings } from '../Postamats/components';

export const darkThemeMode = 'dark';
export const lightThemeMode = 'light';

function App() {
  const [map, setMap] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const handleTest = (map) => {
    setMap(map);
  };
  const [mode, setMode] = useState(lightThemeMode);
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const handleChangeMode = () => {
    setMode((prev) =>
      prev === lightThemeMode ? darkThemeMode : lightThemeMode
    );
    map.setStyle(mode === darkThemeMode ? lightMapStyle : darkModeStyle);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SideBar {...{ handleChangeMode, mode }} />
        <Header {...{ showFilters, setShowFilters }} />
        <CssBaseline />
        <Routes>
          <Route
            path={MAIN_PATH}
            element={
              <Maps {...{ handleTest, mode, showFilters, setShowFilters }} />
            }
            exact
          />
          <Route path={FAVOURITES_PATH} element={<Favourites />} exact />
          <Route path={POSTAMATS_ANALYTICS_PATH} element={<Analytics />} />
          <Route path={POSTAMATS_SETTINGS_PATH} element={<Settings />} />
          <Route path={POSTAMATS_LOGISTICS_PATH} element={<Logistics />} />
          <Route path={DOCUMENTS_PATH} element={<Documents />} exact />
          <Route path={NEWS_PATH} element={<News />} exact />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

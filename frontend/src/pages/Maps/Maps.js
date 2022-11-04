import React, { useEffect, useRef, useState } from 'react';
import { Map, Marker } from 'maplibre-gl';
import get from 'lodash/get';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { darkThemeMode } from '../App/App';
import { Filters } from '../../components/Filters';
import './maps.css';
import { MapControl } from './components/MapControl';
import { PopupPlaceInfo } from '../../components/PopupPlaceInfo';
import { getPostamats } from '../../api';
import { getPostamatsForData } from './util/getPostamats/getPostamats';

const myAPIKey = '3929778c687f40708c37d2155877714a';
export const lightMapStyle = `https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=${myAPIKey}`;
export const darkModeStyle = `https://maps.geoapify.com/v1/styles/dark-matter/style.json?apiKey=${myAPIKey}`;
export const CHANGE_ZOOM_MIN = 'min';
export const CHANGE_ZOOM_MAX = 'max';

const MyMap = ({ handleTest, mode, showFilters }) => {
  useEffect(() => {
    getPostamats()
      .then((data) => {
        setLoading(false);
        setPostamats(getPostamatsForData(get(data, 'data.points')));
      })
      .catch(() => {
        setError('Ошибка получения постаматов');
        setLoading(false);
      });
  }, []);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postamats, setPostamats] = useState([]);
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [initialState, setInitialState] = useState({
    lng: 37.55,
    lat: 55.74,
    zoom: 11,
  });

  const handleSelectedMarker = (pos) => {
    setSelectedPlace((prev) => (prev === pos ? null : pos));
  };

  const handleChangeZoom = (mode) => {
    if (mode === CHANGE_ZOOM_MIN) {
      setInitialState((prev) => {
        if (prev.zoom > 1) {
          map.setZoom(prev.zoom - 1);
          return { ...prev, zoom: prev.zoom - 1 };
        }
        return prev;
      });
    }
    if (mode === CHANGE_ZOOM_MAX) {
      setInitialState((prev) => {
        map.setZoom(prev.zoom + 1);
        return { ...prev, zoom: prev.zoom + 1 };
      });
    }
  };
  useEffect(() => {
    const map = new Map({
      container: mapContainer.current,
      style: mode === darkThemeMode ? darkModeStyle : lightMapStyle,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    handleTest(map);
    setMap(map);
  }, [mapContainer.current]);

  useEffect(() => {
    if (map) {
      postamats.forEach((pos) => {
        const marker = new Marker({
          color: 'red',
        });
        marker
          .getElement()
          .addEventListener('click', () => handleSelectedMarker(pos));
        marker.setLngLat(pos.coordinates.split(',').reverse()).addTo(map);
      });
    }
  }, [map, postamats]);
  return (
    <div>
      <Filters {...{ showFilters, setPostamats }} />
      <PopupPlaceInfo {...{ selectedPlace }} />
      <div
        className="map-container"
        style={{ width: '100vw', height: '100vh' }}
        ref={mapContainer}
      ></div>
      {loading && (
        <CircularProgress
          sx={{ zIndex: 1000, position: 'absolute', top: '47%', left: '50%' }}
          color="error"
        />
      )}
      {error && (
        <Alert
          sx={{
            zIndex: 1000,
            position: 'absolute',
            top: '96px',
            right: '15px',
          }}
          severity="error"
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}
      <MapControl {...{ handleChangeZoom }} />
    </div>
  );
};

export default MyMap;

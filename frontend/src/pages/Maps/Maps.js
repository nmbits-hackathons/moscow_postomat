import React, { useEffect, useRef, useState } from 'react';
import { Map, Marker } from 'maplibre-gl';

import { darkThemeMode } from '../App/App';
import { Filters } from '../../components/Filters';
import './maps.css';
import { MapControl } from './components/MapControl';
import { PopupPlaceInfo } from '../../components/PopupPlaceInfo';
import { exampleData } from './dataTest';

const myAPIKey = '3929778c687f40708c37d2155877714a';
export const lightMapStyle = `https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=${myAPIKey}`;
export const darkModeStyle = `https://maps.geoapify.com/v1/styles/dark-matter/style.json?apiKey=${myAPIKey}`;
export const CHANGE_ZOOM_MIN = 'min';
export const CHANGE_ZOOM_MAX = 'max';

const MyMap = ({ handleTest, mode }) => {
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
      exampleData.forEach((pos) => {
        const marker = new Marker({
          color: 'red',
        });
        marker
          .getElement()
          .addEventListener('click', () => handleSelectedMarker(pos));
        marker.setLngLat(pos).addTo(map);
      });
    }
  }, [map]);
  return (
    <div>
      <Filters />
      <PopupPlaceInfo {...{ selectedPlace }} />
      <div
        className="map-container"
        style={{ width: '100vw', height: '100vh' }}
        ref={mapContainer}
      ></div>
      <MapControl {...{ handleChangeZoom }} />
    </div>
  );
};

export default MyMap;

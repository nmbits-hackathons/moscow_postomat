import React, { useEffect, useRef, useState } from 'react';
import {
  Map,
  Marker,
  Popup,
  MapboxEvent,
  FeatureIdentifier,
} from 'maplibre-gl';
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

import { MaplibreExportControl, Size, PageOrientation, Format, DPI} from "@watergis/maplibre-gl-export";
import '@watergis/maplibre-gl-export/css/styles.css';

const myAPIKey = '3929778c687f40708c37d2155877714a';
export const lightMapStyle = `https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=${myAPIKey}`;
export const darkModeStyle = `https://maps.geoapify.com/v1/styles/dark-matter/style.json?apiKey=${myAPIKey}`;
export const CHANGE_ZOOM_MIN = 'min';
export const CHANGE_ZOOM_MAX = 'max';

function hexagon(x, y, km) {
  let r = km / 110;
  let arr = [];
  for (let i = 0; i < 6; i++) {
    const x1 = +x + r * Math.cos((i * Math.PI) / 3);
    const x2 = +y + (r / 2) * Math.sin((i * Math.PI) / 3);
    arr.push([x1, x2]);
  }
  return arr;
}

function getColor(x) {
  if (x > 7) {
    return '#fd1a41';
  }
  if (x > 6) {
    return 'rgba(255,59,89,0.72)';
  }
  if (x > 5) {
    return 'rgba(255,119,139,0.81)';
  }
  return  'rgba(80,80,80,0.74)';
}

const MyMap = ({ handleTest, mode, showFilters }) => {
  useEffect(() => {
    getPostamats()
      .then((data) => {
        setLoading(false);
        setPostamats(getPostamatsForData(get(data, 'data')));
      })
      .catch(() => {
        // setError('Ошибка получения постаматов');
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

    map.on('click', 'maine', function (e) {
      new Map.setLngLat(e.lngLat)
        .setHTML(e.features[0].properties.weight)
        .addTo(map);
    });


    map.addControl(new MaplibreExportControl({
      Filename: 'размещение-постаматов-' + new Date().toISOString().slice(0, 10),
      PageSize: Size.A3,
      PageOrientation: PageOrientation.Landscape,
      Format: Format.PDF,
      DPI: DPI[96],
      Crosshair: true,
      PrintableArea: true
    }), 'bottom-right');

  }, [mapContainer.current, postamats]);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (map) {
      let ps = postamats
      ps.forEach((pos) => {
        // alert(pos)
        const marker = new Marker({
          color: pos.radius === 0 ? getColor(pos.indicator) : '#949494',
          scale: pos.radius === 0 ? 1 : 0.5
        });
        marker
          .getElement()
          .addEventListener('click', () => handleSelectedMarker(pos));
        marker.setLngLat(pos.coordinates.split(',').reverse()).addTo(map);
        setMarkers([...markers, marker]);
      });
      map.on('load', function () {
        ps.forEach((el, index) => {
          map.addSource(`maine-${index}`, {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  weight: 0 + el.indicator,
                  properties: {
                    population: 1,
                    weight: el.indicator,
                  },
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [
                      hexagon(
                        el.coordinates.split(',').reverse()[0],
                        el.coordinates.split(',').reverse()[1],
                        el.radius
                      ),
                    ],
                  },
                },
              ],
            },
          });
          map.addLayer({
            id: `maine-${index}`,
            type: 'fill',
            source: `maine-${index}`,
            layout: {},
            paint: {
              'fill-color': [
                'let',
                'density',
                ['get', 'weight'],
                [
                  'interpolate',
                  ['linear'],
                  ['zoom'],
                  4,
                  [
                    'interpolate',
                    ['linear'],
                    ['var', 'density'],
                    2,
                    ['to-color', 'rgba(80,80,80,0.74)'],
                    3,
                    ['to-color', 'rgba(155,152,152,0.74)'],
                    4,
                    ['to-color', 'rgba(190,185,185,0.74)'],
                    5,
                    ['to-color', 'rgba(255,167,182,0.82)'],
                    6,
                    ['to-color', 'rgba(255,119,139,0.81)'],
                    7,
                    ['to-color', 'rgba(255,86,122,0.63)'],
                    8,
                    ['to-color', 'rgba(255,59,89,0.72)'],
                    9,
                    ['to-color', '#fd1a41'],
                  ],
                ],
              ],
              'fill-opacity': 0.7,
            },
          });
        });
      });
    }
  }, [map, postamats]);

  return (
    <div>
      <Filters {...{ showFilters, setPostamats, setLoading }} />
      <PopupPlaceInfo {...{ selectedPlace, cov: (selectedPlace == null ? null : postamats[selectedPlace['id']])} } />
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

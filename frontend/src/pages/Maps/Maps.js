import React, { useEffect, useRef } from 'react';
import { Map } from 'maplibre-gl';

import './maps.css';

const MyMap = ({handleTest}) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const myAPIKey = '3929778c687f40708c37d2155877714a';
        const mapStyle =
            'https://maps.geoapify.com/v1/styles/klokantech-basic/style.json';

        const initialState = {
            lng: 37.55,
            lat: 55.74,
            zoom: 11,
        };

        const map = new Map({
            container: mapContainer.current,
            style: `${mapStyle}?apiKey=${myAPIKey}`,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom,
        });

        handleTest(map);
    }, [mapContainer.current]);

    return <div className="map-container" style={{ width: "100vw", height: "100vh"}} ref={mapContainer}></div>;
};

export default MyMap;

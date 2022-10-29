import React, { useEffect, useRef } from 'react';
import { Map } from 'maplibre-gl';

import {darkThemeMode} from "../App/App";
import {Filters} from "../../components/Filters";
import './maps.css';

const myAPIKey = '3929778c687f40708c37d2155877714a';
export const lightMapStyle = `https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=${myAPIKey}`
export const darkModeStyle =
    `https://maps.geoapify.com/v1/styles/dark-matter/style.json?apiKey=${myAPIKey}`;

const MyMap = ({handleTest, mode}) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const initialState = {
            lng: 37.55,
            lat: 55.74,
            zoom: 11,
        };

        const map = new Map({
            container: mapContainer.current,
            style: mode === darkThemeMode ? darkModeStyle : lightMapStyle,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom,
        });

        handleTest(map);
    }, [mapContainer.current]);

    return <div>
        <Filters />
        <div className="map-container" style={{ width: "100vw", height: "100vh"}} ref={mapContainer}></div>
    </div>;
};

export default MyMap;

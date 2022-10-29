import React, { useEffect, useRef, useState } from 'react';
import { Map } from 'maplibre-gl';

import {darkThemeMode} from "../App/App";
import {Filters} from "../../components/Filters";
import './maps.css';
import {MapControl} from "./components/MapControl";

const myAPIKey = '3929778c687f40708c37d2155877714a';
export const lightMapStyle = `https://maps.geoapify.com/v1/styles/positron/style.json?apiKey=${myAPIKey}`
export const darkModeStyle =
    `https://maps.geoapify.com/v1/styles/dark-matter/style.json?apiKey=${myAPIKey}`;

const MyMap = ({handleTest, mode}) => {
    const mapContainer = useRef(null);
    const [initialState, setInitialState] = useState({
        lng: 37.55,
        lat: 55.74,
        zoom: 11,
    })

    useEffect(() => {

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
        <MapControl />
    </div>;
};

export default MyMap;

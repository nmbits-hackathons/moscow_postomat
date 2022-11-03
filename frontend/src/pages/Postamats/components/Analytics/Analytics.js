import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import {useEffect, useRef, useState} from "react";
import turnover_light from "../Settings/turnover_light.svg";
import services_light from "../Settings/services_light.svg";
import marketplaces_light from "../Settings/marketplaces_light.svg";
import coverage_light from "../Settings/coverage_light.svg";
import geography_light from "../Settings/geography_light.svg";

export const Analytics = () => {
    const theme = useTheme();

    const [width, setWidth] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setWidth(ref.current.clientWidth);
        // alert(width)
    })

    const scale = width / (298 + 367 + 34 * 2) / 2.1;
    const h1 = 298 * scale;
    const h2 = 367 * scale;
    const mw = 24 * scale;
    const mh = 20 * scale;

    return (
        <Box
            sx={{
                zIndex: 1000,
                marginLeft: '96px',
                padding: '103px 15px 15px 15px',
                display: 'flex',
                background: theme.palette.action.hover,
                minHeight: '100vh',
                width: '100%',
                flexDirection: 'column',
            }}
        >
            <div style={{width: '100%', marginLeft: '8px'}} ref={ref}>
                <div style={{display: 'flex', height: h1.toString() + 'px', marginBottom: mh.toString() + 'px'}}>
                    <img src={turnover_light} alt={'turnover'} style={{marginRight: mw.toString() + 'px'}}/>
                    <img src={services_light} alt={'services'} style={{marginRight: mw.toString() + 'px'}}/>
                    <img src={marketplaces_light} alt={'marketplaces'}/>
                </div>
                <div style={{display: 'flex', height: h2.toString() + 'px'}}>
                    <img src={coverage_light} alt={'turnover'} style={{marginRight: mw.toString() + 'px'}}/>
                    <img src={geography_light} alt={'geography'}/>
                </div>
            </div>
        </Box>
    );
};

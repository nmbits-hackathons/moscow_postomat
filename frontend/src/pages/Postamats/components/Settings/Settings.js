import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import card_light_1 from '../Analytics/card_light_1.svg'
import card_light_2 from '../Analytics/card_light_2.svg'
import card_light_3 from '../Analytics/card_light_3.svg'
import card_light_4 from '../Analytics/card_light_4.svg'

import rating_light from '../Analytics/rating_svg.svg'
import search_light from '../Analytics/search_light.svg'

export const Settings = () => {
    const theme = useTheme();

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
            <div style={{marginLeft: '4px'}}>
                <div style={{display: 'flex', flexDirection: 'column', width: '600px'}}>
                    <div style={{display: 'flex'}}>
                        <img alt={'rating'} src={rating_light} style={{height: '56px', marginBottom: '12px', marginRight: '12px'}}/>
                        <img alt={'search'} src={search_light} style={{height: '56px', marginBottom: '12px'}}/>
                    </div>
                    <img alt={'card_light'} src={card_light_1} style={{marginBottom: '12px'}}/>
                    <img alt={'card_light'} src={card_light_2} style={{marginBottom: '12px'}}/>
                    <img alt={'card_light'} src={card_light_3} style={{marginBottom: '12px'}}/>
                    <img alt={'card_light'} src={card_light_4} style={{marginBottom: '12px'}}/>
                </div>
            </div>
        </Box>
    );
};

import {useState} from "react";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {CHANGE_ZOOM_MAX, CHANGE_ZOOM_MIN} from "../../Maps";

export const MapControl = ({handleChangeZoom}) => {
    const theme = useTheme()
    return <Box sx={{
        position: 'absolute',
        top: 'calc(50% - 100px)',
        right: '50px',
        zIndex: 1000,
        display: 'flex',
        flexFlow: 'column',
        gap: '8px'
    }}
    >
        <IconButton
            aria-label="add"
            size="large"
            onClick={() => handleChangeZoom(CHANGE_ZOOM_MAX)}
            sx={{
                width: "52px",
                height: '52px',
                background: theme.palette.background.default,
                borderRadius: '12px',
            }}
        >
            <AddIcon />
        </IconButton>
        <IconButton
            aria-label="add"
            size="large"
            onClick={() => handleChangeZoom(CHANGE_ZOOM_MIN)}
            sx={{
                width: "52px",
                height: '52px',
                background: theme.palette.background.default,
                borderRadius: '12px',
            }}
        >
            <HorizontalRuleIcon />
        </IconButton>
    </Box>
}

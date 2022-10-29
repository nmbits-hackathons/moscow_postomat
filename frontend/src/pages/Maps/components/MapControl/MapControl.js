import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
export const MapControl = () => {
    return <Box sx={{
        position: 'absolute',
        top: 'calc(50% - 100px)',
        right: '50px',
        zIndex: 1000
    }}
    >
        <IconButton aria-label="add">
            <AddIcon />
        </IconButton>
        <IconButton aria-label="add">
            <HorizontalRuleIcon />
        </IconButton>
    </Box>
}

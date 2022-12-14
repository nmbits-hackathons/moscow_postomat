import Box from '@mui/material/Box';
import get from 'lodash/get';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import { PostamatsFullInfoCard } from '../PostamatsFullInfoCard';
import { useEffect, useState } from 'react';

export const PopupPlaceInfo = ({ selectedPlace }) => {
  const theme = useTheme();
  const [fullInfoCardOpen, setFullInfoCardOpen] = useState(null);
  useEffect(() => {
    setFullInfoCardOpen(null);
  }, [selectedPlace]);
  if (!selectedPlace) return null;
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '16px',
        top: '96px',
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '324px',
        background: theme.palette.background.default,
        zIndex: 1000,
        borderRadius: '20px',
        padding: '20px 24px 24px 24px',
        boxShadow: '26px 23px 40px rgba(0, 0, 0, 0.08)',
        boxSizing: 'border-box',
        gap: '10px',
      }}
    >
      <PostamatsFullInfoCard {...{ fullInfoCardOpen, setFullInfoCardOpen }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          align="left"
          variant="h6"
          sx={{
            fontWeight: '900',
          }}
        >
          {get(selectedPlace, 'title')}
        </Typography>
        <IconButton
          size="large"
          sx={{
            width: '52px',
            height: '52px',
            background: theme.palette.action.hover,
            borderRadius: '12px',
          }}
        >
          <ZoomInIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <Typography
          align="left"
          variant="subtitle1"
          paragraph={true}
          sx={{
            marginBottom: '2px',
          }}
        >
          {get(selectedPlace, 'coordinates')}
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            fontWeight: '900',
          }}
        >
          {get(selectedPlace, 'address_string')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography
            align="left"
            variant="subtitle1"
            paragraph={true}
            sx={{
              marginBottom: '2px',
              fontWeight: '900',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#F62E46',
            }}
          >
            {get(selectedPlace, 'indicator')}/10
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '22px',
              color: '#9EA2B0',
            }}
          >
            ????????????
          </Typography>
        </div>
        <div>
          <Typography
            align="left"
            variant="subtitle1"
            paragraph={true}
            sx={{
              marginBottom: '2px',
              fontWeight: '900',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#F62E46',
            }}
          >
            {get(selectedPlace, 'square')}
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '22px',
              color: '#9EA2B0',
            }}
          >
            ?????????? ??????????????????
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <IconButton
          size="large"
          sx={{
            width: '52px',
            height: '52px',
            background: theme.palette.action.hover,
            borderRadius: '12px',
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <Button
          fullWidth={true}
          onClick={() => setFullInfoCardOpen(selectedPlace)}
          sx={{
            background: theme.palette.action.hover,
            borderRadius: '12px',
          }}
        >
          ??????????????????
        </Button>
      </Box>
    </Box>
  );
};

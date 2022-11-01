import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import icon from '../../assets/upload.svg';
import { useHeaderComponents } from './hooks/useHeaderComponents';

export const Header = ({ showFilters, setShowFilters }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1000,
        top: '8px',
        right: '16px',
        left: `96px`,
        display: 'flex',
        background: 'none',
        color: theme.palette.background.default,
        width: `calc(100% - (96px + 16px))`,
        height: '80px',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          marginLeft: '20px',
          background: theme.palette.background.default,
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>{useHeaderComponents({ ...{ showFilters, setShowFilters } })}</div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Button
            style={{
              borderRadius: '12px',
              padding: '16px 32px',
              backgroundColor: theme.palette.action.selected,
              boxShadow: 'none',
              marginRight: '8px',
            }}
            variant="contained"
          >
            <img alt="icon XSLX" src={icon} />
            <div style={{ padding: '8px' }}></div>
            <Typography
              variant={'h6'}
              style={{ color: theme.palette.text.secondary }}
            >
              XSLX
            </Typography>
          </Button>

          <Button
            style={{
              borderRadius: '12px',
              padding: '16px 32px',
              backgroundColor: theme.palette.action.selected,
              boxShadow: 'none',
            }}
            variant="contained"
          >
            <img alt="icon PDF" src={icon} />
            <div style={{ padding: '8px' }}></div>
            <Typography
              variant={'h6'}
              style={{ color: theme.palette.text.secondary }}
            >
              PDF
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </Box>
  );
};

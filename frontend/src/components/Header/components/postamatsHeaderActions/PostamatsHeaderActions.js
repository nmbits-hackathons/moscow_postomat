import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TuneIcon from '@mui/icons-material/Tune';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import {
  POSTAMATS_ANALYTICS_PATH,
  POSTAMATS_LOGISTICS_PATH,
  POSTAMATS_SETTINGS_PATH,
} from '../../../../constants/path';

export const PostamatsHeaderActions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Button
        endIcon={<TuneIcon />}
        onClick={() => handleNavigate(POSTAMATS_SETTINGS_PATH)}
        sx={{
          borderBottom: path === POSTAMATS_SETTINGS_PATH ? '3px solid red' : '',
            marginRight: '16px',
        }}
      >
        Управление
      </Button>
      <Button
        endIcon={<TrendingUpIcon />}
        onClick={() => handleNavigate(POSTAMATS_ANALYTICS_PATH)}
        sx={{
          borderBottom:
            path === POSTAMATS_ANALYTICS_PATH ? '3px solid red' : '',
            marginRight: '16px',
        }}
      >
        Аналитика
      </Button>
      <Button
        endIcon={<AirportShuttleIcon />}
        onClick={() => handleNavigate(POSTAMATS_LOGISTICS_PATH)}
        sx={{
          borderBottom:
            path === POSTAMATS_LOGISTICS_PATH ? '3px solid red' : '',
        }}
      >
        Логистика
      </Button>
    </div>
  );
};

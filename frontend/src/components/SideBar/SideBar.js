import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Logo from '../../assets/logo.png';
import { ThemeMode } from '../ThemeMode';
import {
  DOCUMENTS_PATH,
  FAVOURITES_PATH,
  MAIN_PATH,
  NEWS_PATH,
  POSTAMATS_ANALYTICS_PATH,
  POSTAMATS_LOGISTICS_PATH,
  POSTAMATS_SETTINGS_PATH,
  postamatsPath,
} from '../../constants/path';

export const SideBar = ({ handleChangeMode, mode }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const handleNavigate = (path) => navigate(path);
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexFlow: 'column nowrap',
        paddingTop: '20px',
        justifyContent: 'space-between',
        maxWidth: '96px',
        height: '100%',
        zIndex: '1000',
        background: theme.palette.background.default,
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        boxSizing: 'border-box',
      }}
    >
      <img
        alt="logo"
        src={Logo}
        style={{
          width: '100%',
          objectFit: 'contain',
          height: '40px',
        }}
      />
      <List
        sx={{
          alignSelf: 'center',
          justifySelf: 'center',
          boxSizing: 'border-box',
          maxWidth: '96px',
        }}
      >
        <ListItemButton
          onClick={() => handleNavigate(MAIN_PATH)}
          sx={{
            minHeight: 48,
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            borderRight: path === MAIN_PATH ? '3px solid red' : '',
            marginBottom: '10px',
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
            }}
          >
            <TravelExploreIcon
              fontSize="large"
              color={path === MAIN_PATH ? 'error' : 'disabled'}
            />
          </ListItemIcon>
          <ListItemText
            primary={'Карта'}
            sx={{
              opacity: 1,
              color:
                path === MAIN_PATH
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigate(FAVOURITES_PATH)}
          sx={{
            minHeight: 48,
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            marginBottom: '10px',
            borderRight: path === FAVOURITES_PATH ? '3px solid red' : '',
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
            }}
          >
            <FavoriteBorderIcon
              fontSize="large"
              color={path === FAVOURITES_PATH ? 'error' : 'disabled'}
            />
          </ListItemIcon>
          <ListItemText
            primary={'Избранное'}
            sx={{
              opacity: 1,
              color:
                path === FAVOURITES_PATH
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigate(POSTAMATS_ANALYTICS_PATH)}
          sx={{
            minHeight: 48,
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            marginBottom: '10px',
            borderRight: postamatsPath.some((el) => el === path)
              ? '3px solid red'
              : '',
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
            }}
          >
            <HomeRepairServiceIcon
              fontSize="large"
              color={
                postamatsPath.some((el) => el === path) ? 'error' : 'disabled'
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={'Постаматы'}
            sx={{
              opacity: 1,
              color: postamatsPath.some((el) => el === path)
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigate(DOCUMENTS_PATH)}
          sx={{
            minHeight: 48,
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            marginBottom: '10px',
            borderRight: path === DOCUMENTS_PATH ? '3px solid red' : '',
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
            }}
          >
            <ContentCopyIcon
              fontSize="large"
              color={path === DOCUMENTS_PATH ? 'error' : 'disabled'}
            />
          </ListItemIcon>
          <ListItemText
            primary={'Документы'}
            sx={{
              opacity: 1,
              color:
                path === DOCUMENTS_PATH
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => handleNavigate(NEWS_PATH)}
          sx={{
            minHeight: 48,
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            marginBottom: '10px',
            borderRight: path === NEWS_PATH ? '3px solid red' : '',
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
            }}
          >
            <AnnouncementIcon
              fontSize="large"
              color={path === NEWS_PATH ? 'error' : 'disabled'}
            />
          </ListItemIcon>
          <ListItemText
            primary={'Новости'}
            sx={{
              opacity: 1,
              color:
                path === NEWS_PATH
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
            }}
          />
        </ListItemButton>
      </List>
      <ThemeMode {...{ mode, handleChangeMode }} />
    </Box>
  );
};

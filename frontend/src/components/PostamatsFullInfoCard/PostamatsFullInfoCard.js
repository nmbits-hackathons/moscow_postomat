import Box from '@mui/material/Box';
import get from 'lodash/get';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

export const PostamatsFullInfoCard = ({
  fullInfoCardOpen,
  setFullInfoCardOpen,
}) => {
  const theme = useTheme();
  if (!fullInfoCardOpen) return null;
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 'calc(50% - 259px)',
        left: 'calc(50% - 302px)',
        width: '604px',
        background: theme.palette.background.default,
        boxShadow: '26px 23px 40px rgba(0, 0, 0, 0.08)',
        borderRadius: '20px',
        zIndex: 1000,
        display: 'flex',
        flexFlow: 'column nowrap',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: '20px 20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '20px',
          }}
        >
          {get(fullInfoCardOpen, 'title')}
        </Typography>
        <IconButton
          sx={{
            width: '52px',
            height: '52px',
            background: theme.palette.action.hover,
            borderRadius: '12px',
          }}
          onClick={() => setFullInfoCardOpen(null)}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginTop: '32px',
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
          {get(fullInfoCardOpen, 'coordinates')}
        </Typography>
        <Typography
          align="left"
          variant="h6"
          sx={{
            fontWeight: '900',
          }}
        >
          {get(fullInfoCardOpen, 'address_string')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row nowrap',
          marginTop: '32px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            gap: '8px',
          }}
        >
          <Typography
            align="left"
            variant="subtitle1"
            paragraph={true}
            sx={{
              color: '#9EA2B0',
            }}
          >
            Контакты
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              gap: '8px',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <LocalPhoneIcon fontSize="small" />
            <Typography
              align="left"
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '22px,',
              }}
            >
              +7 912 345 67 89
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              gap: '8px',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <EmailIcon fontSize="small" />
            <Typography
              align="left"
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '22px,',
              }}
            >
              email@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            gap: '8px',
          }}
        >
          <Typography align="left" variant="subtitle1" paragraph={true}>
            График работы
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              gap: '8px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              align="left"
              variant="h6"
              sx={{
                color: '#9EA2B0',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              Будни
            </Typography>
            <Typography
              align="left"
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              09:00 - 19:00
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              gap: '8px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              align="left"
              variant="h6"
              sx={{
                color: '#9EA2B0',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              Суббота
            </Typography>
            <Typography
              align="left"
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              10:00 - 18:00
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'row nowrap',
              gap: '8px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              align="left"
              variant="h6"
              sx={{
                color: '#9EA2B0',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              Воскресенье
            </Typography>
            <Typography
              align="left"
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              10:00 - 16:00
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: '#FAFAFB',
          borderRadius: '20px',
          width: '100%',
          marginTop: '24px',
          padding: '24px 24px',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
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
                fontWeight: '900',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#F62E46',
              }}
            >
              {get(fullInfoCardOpen, 'indicator')}/10
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
              16 место из 100
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'flex-start',
            }}
          >
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
              1 563
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
              Объекты ритейла
            </Typography>
          </Box>
        </div>
        <div>
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
                fontWeight: '900',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#F62E46',
              }}
            >
              {get(fullInfoCardOpen, 'square')}
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
              Охват населения
            </Typography>
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
                fontWeight: '900',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#F62E46',
              }}
            >
              33 101
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
              Отзывы с рейтингом 4+
            </Typography>
          </Box>
        </div>
        <div>
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
                fontWeight: '900',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#F62E46',
              }}
            >
              834 517/в день
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
              Трафик
            </Typography>
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
                fontWeight: '900',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#F62E46',
              }}
            >
              9/10
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
              Интенсивность доставки
            </Typography>
          </Box>
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '24px',
        }}
      >
        <IconButton
          size="large"
          sx={{
            background: theme.palette.action.hover,
            borderRadius: '12px',
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton
          size="large"
          sx={{
            background: theme.palette.action.hover,
            borderRadius: '12px',
          }}
        >
          <VerticalAlignBottomIcon fontSize="small" />
        </IconButton>
        <Button
          sx={{
            width: '460px',
            height: '44px',
            background: '#3B3C3C',
            borderRadius: '12px',
          }}
          fullWidth={true}
        >
          Отметить размещенным
        </Button>
      </Box>
    </Box>
  );
};

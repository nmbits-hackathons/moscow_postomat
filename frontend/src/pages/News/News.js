import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import NewsImg from '../../assets/news.png';
export const News = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        zIndex: 1000,
        marginLeft: '96px',
        background: theme.palette.action.hover,
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <img
        alt="news"
        src={NewsImg}
        style={{
          objectFit: 'contain',
          width: '100%',
          height: 'calc(100vh - 90px)',
          marginTop: `98px`,
          marginRight: '10px',
        }}
      />
    </Box>
  );
};

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Card = ({ changed, header }) => {
  const theme = useTheme();

  return (
    <div style={{ margin: '16px' }}>
      <div
        style={{
          height: 'fit-content',
          width: '100%',
          background: theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          border: 'solid 1px ' + theme.palette.divider,
          borderRadius: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{}}>
            <Typography color={theme.palette.text.secondary}>
              Изменен {changed}
            </Typography>
            <Typography variant={'h6'}>{header}</Typography>
          </div>
          <div style={{ display: 'flex', color: theme.palette.text.secondary }}>
            <EditOutlinedIcon
              style={{ marginRight: '16px', cursor: 'pointer' }}
            />
            <DeleteOutlineIcon style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: '100px 200px' }}>
            <InsertDriveFileIcon
              color={'error'}
              style={{ height: '100px', width: '100px' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', height: '50px' }}>
          <Button
            variant="contained"
            sx={{
              background: theme.palette.text.secondary,
              boxShadow: 'none',
              borderRadius: '12px',
            }}
            style={{
              marginRight: '16px',
              background: theme.palette.divider,
              color: theme.palette.text.secondary,
            }}
          >
            <FileDownloadOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            sx={{
              background: theme.palette.text.secondary,
              borderRadius: '12px',
            }}
            color="primary"
            fullWidth={true}
          >
            Использовать
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Documents = () => {
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
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          marginLeft: '-12px',
        }}
      >
        <Card changed={'31.10.2022'} header={'Шаблон для ИП'} />
        <Card changed={'31.10.2022'} header={'Шаблон для ООО'} />
        <Card changed={'31.10.2022'} header={'Шаблон для ОАО'} />
        <Card changed={'31.10.2022'} header={'Шаблон на расчет'} />
      </div>
    </Box>
  );
};

import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  OutlinedInput,
  Select,
  MenuItem,
  Chip,
  InputLabel,
  FormControl,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//--------------------------------mock
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['ЦАО', 'ЮАО', 'ЮВАО', 'ЮЗАО'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

//---------------------mock-----------------------------

export const Filters = () => {
  const theme = useTheme();
  const location = useLocation();
  const path = location.pathname;
  const [expanded, setExpanded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const AccordionDetails = (({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: '1px solid rgba(0, 0, 0, .125)',
  // }));

  //----------------------mock-----------------------
  const [personName, setPersonName] = useState([]);
  const [selected, setSelected] = useState(false);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setSelected(true);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  //-------------------------------------------------------------------

  if (path !== '/') return;

  const selectStyles = {
    ...{ '& legend': { display: 'none' }, '& fieldset': { top: 0 } },
    ...{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
        borderRadius: '12px',
        borderWidth: '1px',
      },
    },
    ...{
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
        borderRadius: '12px',
        borderWidth: '1px',
      },
    },
    ...{
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.divider,
        borderRadius: '12px',
        borderWidth: '1px',
      },
    },
  };

  const inputLabelStyles = {
    '&.Mui-focused': {
      color: theme.palette.text.secondary,
    },
  };
  if (!showFilters) {
    return (
      <Button
        variant="outlined"
        onClick={() => setShowFilters((prev) => !prev)}
        sx={{
          position: 'absolute',
          left: '116px',
          bottom: '12px',
          zIndex: 1000,
        }}
        endIcon={<ArrowForwardIosIcon />}
      >
        Параметры поиска
      </Button>
    );
  }
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '116px',
        top: '96px',
        bottom: '12px',
        display: 'flex',
        width: '398px',
        margin: '0 10px 0 0',
        background: theme.palette.background.default,
        zIndex: 1000,
        borderRadius: '20px',
        padding: '20px 24px 24px 24px',
        flexDirection: 'column',
        overflowY: 'auto',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '24px',
        }}
      >
        <Accordion
          disableGutters={true}
          style={{
            border: 'none',
            boxShadow: 'none',
            marginTop: '0px',
            background: 'none',
            width: '100%',
          }}
          defaultExpanded={true}
          elevation={0}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            style={{
              padding: '0',
              paddingBottom: '16px',
              borderBottom: 'solid 1px ' + theme.palette.divider,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography variant={'h5'} style={{ marginLeft: '0px' }}>
              Месторасположение
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: '0' }}>
            <div style={{ height: '20px' }}></div>
            <Typography color={theme.palette.text.secondary}>
              Административный округ
            </Typography>

            <div style={{ height: '4px' }}></div>

            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple={true}
              InputLabelProps={{ shrink: false }}
              fullWidth={true}
              sx={selectStyles}
              value={personName}
              onChange={handleChange1}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            <div style={{ height: '16px' }}></div>

            <Typography color={theme.palette.text.secondary}>Район</Typography>

            <div style={{ height: '4px' }}></div>

            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple={true}
              InputLabelProps={{ shrink: false }}
              fullWidth={true}
              sx={selectStyles}
              value={personName}
              onChange={handleChange1}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            {/*<TextField fullWidth label="fullWidth" id="fullWidth" />*/}
          </AccordionDetails>
        </Accordion>

        <div style={{ marginTop: '16px' }}></div>
        {/*------------------------------------------------------------------------------------------*/}
        <Accordion
          disableGutters={true}
          style={{
            border: 'none',
            boxShadow: 'none',
            marginTop: '0px',
            background: 'none',
            width: '100%',
          }}
          defaultExpanded={true}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          elevation={0}
          sx={{
            '&.MuiAccordion-root:before': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <AccordionSummary
            style={{
              padding: '0',
              paddingBottom: '16px',
              borderBottom: 'solid 1px ' + theme.palette.divider,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography variant={'h5'} style={{ marginLeft: '0px' }}>
              Расчет
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ padding: '0' }}>
            <div style={{ height: '20px' }}></div>
            <Typography color={theme.palette.text.secondary}>
              Алгоритм расчета
            </Typography>

            <div style={{ height: '4px' }}></div>

            <FormControl sx={{ width: '100%' }}>
              <InputLabel
                sx={inputLabelStyles}
                shrink={false}
                id="demo-multiple-chip-label1"
              >
                {!selected && 'Выберите модель для расчета'}
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple={true}
                InputLabelProps={{ shrink: false }}
                fullWidth={true}
                sx={selectStyles}
                value={personName}
                label={'Age'}
                placeholder={'skj'}
                onChange={handleChange1}
                input={<OutlinedInput label="Name" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div style={{ height: '16px' }}></div>

            <Typography color={theme.palette.text.secondary}>Район</Typography>

            <div style={{ height: '4px' }}></div>

            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple={true}
              InputLabelProps={{ shrink: false }}
              fullWidth={true}
              sx={selectStyles}
              value={personName}
              onChange={handleChange1}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            <div style={{ height: '16px' }}></div>

            <Typography color={theme.palette.text.secondary}>
              Количество постаматов
            </Typography>

            <OutlinedInput
              sx={selectStyles}
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: false,
              }}
            />

            {/*<TextField fullWidth label="fullWidth" id="fullWidth" />*/}
          </AccordionDetails>
        </Accordion>
        <div style={{ marginTop: '16px' }}></div>
        <Accordion
          disableGutters={true}
          style={{
            border: 'none',
            boxShadow: 'none',
            marginTop: '0px',
            background: 'none',
            width: '100%',
          }}
          defaultExpanded={true}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          elevation={0}
          sx={{
            '&.MuiAccordion-root:before': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <AccordionSummary
            style={{
              padding: '0',
              paddingBottom: '16px',
              borderBottom: 'solid 1px ' + theme.palette.divider,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <div>
              <Typography variant={'h5'} style={{ marginLeft: '0px' }}>
                Объекты размещения
              </Typography>
              <Typography
                color={theme.palette.text.secondary}
                style={{ marginLeft: '0px' }}
              >
                Отметьте интересующие типы объектов размещения и укажите их
                соотношение
              </Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails style={{ padding: '0' }}>
            <div style={{ height: '20px' }}></div>
            <Typography color={theme.palette.text.secondary}>
              Алгоритм расчета
            </Typography>

            <div style={{ height: '4px' }}></div>

            <FormControl sx={{ width: '100%' }}>
              <InputLabel
                sx={inputLabelStyles}
                shrink={false}
                id="demo-multiple-chip-label1"
              >
                {!selected && 'Выберите модель для расчета'}
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple={true}
                InputLabelProps={{ shrink: false }}
                fullWidth={true}
                sx={selectStyles}
                value={personName}
                label={'Age'}
                placeholder={'skj'}
                onChange={handleChange1}
                input={<OutlinedInput label="Name" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div style={{ height: '16px' }}></div>

            <Typography color={theme.palette.text.secondary}>Район</Typography>

            <div style={{ height: '4px' }}></div>

            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple={true}
              InputLabelProps={{ shrink: false }}
              fullWidth={true}
              sx={selectStyles}
              value={personName}
              onChange={handleChange1}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            <div style={{ height: '16px' }}></div>

            <Typography color={theme.palette.text.secondary}>
              Количество постаматов
            </Typography>

            <OutlinedInput
              sx={selectStyles}
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: false,
              }}
            />

            {/*<TextField fullWidth label="fullWidth" id="fullWidth" />*/}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '24px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: theme.palette.text.secondary,
          }}
          color="primary"
          fullWidth={true}
        >
          Поиск
        </Button>
        <Button variant="outlined" color="secondary" fullWidth={true}>
          Сбросить фильтр
        </Button>
        <Button
          variant="outlined"
          onClick={() => setShowFilters((prev) => !prev)}
          fullWidth={true}
        >
          Скрыть фильтр
        </Button>
      </Box>
    </Box>
  );
};

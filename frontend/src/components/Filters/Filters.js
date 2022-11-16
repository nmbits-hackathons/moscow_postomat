import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useTheme} from '@mui/material/styles';
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
  Checkbox,
  Slider,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import React, {useEffect, useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {adm_districts, MenuProps, models, names} from './Filters.constants';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CircleIcon from '@mui/icons-material/Circle';
import Switch from '@mui/material/Switch';
import {getPostamats} from '../../api';
import {getPostamatsForData} from '../../pages/Maps/util/getPostamats/getPostamats';
import get from 'lodash/get';
import {getStateForPostamatsRequest} from './utils/getStateForPostamatsRequest';
import Alert from '@mui/material/Alert';

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Filters = ({showFilters, setPostamats, setLoading}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState([false, true, true]);
  const handleChange = (panel, index) => (event, isExpanded) => {
    let expandedCopy = expanded;
    expandedCopy[index] = !isExpanded;
    setExpanded([...expandedCopy]);
  };

  const [error, setError] = useState(null);

  const [initialState, setInitialState] = useState({
    kiosks: 0,
    multifunctionalCenter: 0,
    libraries: 0,
    underground: 0,
    houses: 0,
    cultureHouses: 0,
    sports: 0,
    areas: [],
    district: [],
    model: 'math_model',
    coverage: 0,
    nPostamats: 100,
    isAutoCalc: true,
    radius: 500,
  });

  const [distr, setDistr] = useState([])

  const handleSearchPostamats = () => {
    setLoading(true);
    getPostamats(getStateForPostamatsRequest(initialState))
      .then((data) => {
        setLoading(false);
        console.log('ddddd', )
        setPostamats(getPostamatsForData(get(data, 'data')));
      })
      .catch(() => {
        setError('Ошибка получения постаматов');
        setLoading(false);
      });
  };
  const handleChangeField = (key, value) => {
    if (key === 'areas') {
      //setDistr([])
      let copy = []
      value.forEach((el) => {
        // alert(el)
        adm_districts[el].forEach(el1 => {
          copy = [...copy, el1]
        })
      })
      setDistr(copy)
      // alert(ar);
    }
    if (initialState.coverage > 0 && key !== 'nPostamats') {
      let copy = {...initialState}
      copy['nPostamats'] = 0
      setInitialState({...copy});
    } if (initialState.nPostamats > 0 && key === 'nPostamats') {
      let copy = {...initialState}
      copy['coverage'] = 0
      setInitialState({...copy});
    }
    setInitialState((prev) => ({...prev, [key]: value}));
  }

  const selectStyles = {
    ...{'& legend': {display: 'none'}, '& fieldset': {top: 0}},
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

  if (!showFilters) return;

  return (
    <Box
      sx={{
        position: 'absolute',
        left: '116px',
        top: '96px',
        bottom: '12px',
        display: 'flex',
        width: '415px',
        margin: '0 10px 0 0',
        background: theme.palette.background.default,
        zIndex: 1000,
        borderRadius: '20px',
        flexDirection: 'column',
        overflowY: 'auto',
        justifyContent: 'space-between',
        padding: '5px 5px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '24px',
          overflowY: 'auto',
          overflowX: 'hidden',
          width: '100%',
          padding: '10px 10px',
          boxSizing: 'border-box',
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
          expanded={expanded[0] === false}
          onChange={handleChange('panel', 0)}
        >
          <AccordionSummary
            style={{
              padding: '0',
              paddingBottom: '16px',
              borderBottom: 'solid 1px ' + theme.palette.divider,
            }}
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography variant={'h5'} style={{marginLeft: '0px'}}>
              Месторасположение
            </Typography>
          </AccordionSummary>

          <AccordionDetails style={{padding: '0'}}>
            <div style={{height: '20px'}}></div>
            <Typography color={theme.palette.text.secondary}>
              Административный округ
            </Typography>

            <div style={{height: '4px'}}></div>

            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple={true}
              InputLabelProps={{shrink: false}}
              fullWidth={true}
              sx={selectStyles}
              value={initialState.areas}
              onChange={(evt) => handleChangeField('areas', evt.target.value)}
              input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
              renderValue={(selected) => (
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                  {selected.map((value) => (
                    <Chip key={value} label={value}/>
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, initialState.areas, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            <div style={{height: '16px'}}></div>

            <Typography color={theme.palette.text.secondary}>Район</Typography>

            <div style={{height: '4px'}}></div>

            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple={true}
              InputLabelProps={{shrink: false}}
              fullWidth={true}
              sx={selectStyles}
              value={initialState.district}
              onChange={(evt) =>
                handleChangeField('district', evt.target.value)
              }
              input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
              renderValue={(selected) => (
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                  {selected.map((value) => (
                    <Chip key={value} label={value}/>
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {distr.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, initialState.areas, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>

            {/*<TextField fullWidth label="fullWidth" id="fullWidth" />*/}
          </AccordionDetails>
        </Accordion>

        {/*------------------------------------------------------------------------------------------*/}
        <Accordion
          disableGutters={true}
          style={{
            marginTop: '16px',
            border: 'none',
            boxShadow: 'none',
            background: 'none',
            width: '100%',
          }}
          defaultExpanded={true}
          expanded={expanded[1] === false}
          onChange={handleChange('', 1)}
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
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography variant={'h5'} style={{marginLeft: '0px'}}>
              Расчет
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{padding: '0'}}>
            <div style={{height: '20px'}}></div>
            <Typography color={theme.palette.text.secondary}>
              Алгоритм расчета
            </Typography>

            <div style={{height: '4px'}}></div>

            <FormControl sx={{width: '100%'}}>
              <InputLabel
                sx={inputLabelStyles}
                shrink={false}
                id="demo-multiple-chip-label1"
              >
                {/*{!selected && 'Выберите модель для расчета'}*/}
              </InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple={false}
                InputLabelProps={{shrink: false}}
                fullWidth={true}
                sx={selectStyles}
                value={
                  models.filter((el) => el.value === initialState.model)[0]
                    ?.name
                }
                label={'Age'}
                placeholder={'skj'}
                onChange={(evt) =>
                  handleChangeField(
                    'model',
                    models.filter((el) => el.name === evt.target.value)[0]
                      ?.value
                  )
                }
                input={<OutlinedInput label="Name"/>}
                renderValue={(selected) => (
                  <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                    <Chip key={selected} label={selected}/>
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {models.map(({name}) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, initialState.areas, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div style={{height: '16px'}}></div>

            <Typography color={theme.palette.text.secondary}>
              Количество постаматов
            </Typography>

            <OutlinedInput
              sx={selectStyles}
              id="filled-number"
              label="Number"
              type="number"
              value={initialState.nPostamats}
              // InputLabelProps={{
              //     shrink: false,
              // }}
              onChange={(evt) =>
                handleChangeField('nPostamats', evt.target.value)
              }
            />

            <div style={{height: '16px'}}></div>

            <Typography color={theme.palette.text.secondary}>
              Охват населения в %
            </Typography>

            <OutlinedInput
              sx={selectStyles}
              id="filled-number"
              label="Number"
              type="number"
              value={initialState.coverage}
              // InputLabelProps={{
              //     shrink: false,
              // }}
              onChange={(evt) =>
                handleChangeField('coverage', evt.target.value)
              }
            />

            <div style={{height: '16px'}}></div>

            <Typography color={theme.palette.text.secondary}>
              Радиус сектора, м
            </Typography>

            <OutlinedInput
              sx={selectStyles}
              id="filled-number"
              label="Number"
              type="number"
              value={initialState.radius}
              // InputLabelProps={{
              //     shrink: false,
              // }}
              onChange={(evt) =>
                handleChangeField('radius', evt.target.value)
              }
            />

            {/*<TextField fullWidth label="fullWidth" id="fullWidth" />*/}
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          style={{
            marginTop: '16px',
            border: 'none',
            boxShadow: 'none',
            background: 'none',
            width: '100%',
          }}
          defaultExpanded={true}
          expanded={expanded[2] === false}
          onChange={handleChange('panel', 2)}
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
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <div>
              <Typography variant={'h5'} style={{marginLeft: '0px'}}>
                Объекты размещения
              </Typography>
              <Typography
                color={theme.palette.text.secondary}
                style={{marginLeft: '0px'}}
              >
                Отметьте интересующие типы объектов размещения и укажите их
                соотношение
              </Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails style={{padding: '0'}}>
            <div
              style={{
                marginTop: '20px',
                background: theme.palette.divider,
                borderRadius: '12px',
                display: 'flex',
                padding: '16px',
              }}
            >
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography>Все типы объектов</Typography>
                <Typography>Мы предложим их оптимальное соотношение</Typography>
              </div>
              <Checkbox
                onChange={() =>
                  handleChangeField('isAutoCalc', !initialState.isAutoCalc)
                }
                {...label}
                checked={initialState.isAutoCalc}
                icon={<PanoramaFishEyeIcon/>}
                checkedIcon={<CircleIcon/>}
              />
            </div>

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '28px',
                paddingBottom: '8px',
              }}
            >
              <Typography>Киоски</Typography>
              <Switch
                onChange={(event) =>
                  handleChangeField('kiosks', event.target.checked ? 50 : 0)
                }
                checked={initialState.kiosks > 0}
                {...label}
              />
            </div>
            {initialState.kiosks ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('kiosks', evt.target.value)
                }
                size={'small'}
                value={initialState.kiosks}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <Typography>МФЦ</Typography>
              <Switch
                onChange={(event) =>
                  handleChangeField(
                    'multifunctionalCenter',
                    event.target.checked ? 50 : 0
                  )
                }
                checked={initialState.multifunctionalCenter > 0}
                {...label}
              />
            </div>
            {initialState.multifunctionalCenter ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('multifunctionalCenter', evt.target.value)
                }
                size={'small'}
                value={initialState.multifunctionalCenter}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <Typography>Библиотеки</Typography>
              <Switch
                onChange={(event) =>
                  handleChangeField(
                    'libraries',
                    event.target.checked ? 50 : 0
                  )
                }
                checked={initialState.libraries > 0}
                {...label}
              />
            </div>
            {initialState.libraries ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('libraries', evt.target.value)
                }
                size={'small'}
                value={initialState.libraries}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <Typography>Дома культуры и клубы</Typography>
              <Switch
                onChange={(event) =>
                  handleChangeField(
                    'cultureHouses',
                    event.target.checked ? 50 : 0
                  )
                }
                {...label}
                checked={initialState.cultureHouses > 0}
              />
            </div>
            {initialState.cultureHouses ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('cultureHouses', evt.target.value)
                }
                size={'small'}
                value={initialState.cultureHouses}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <Typography>Спортивные объекты</Typography>
              <Switch
                onChange={(event) =>
                  handleChangeField('sports', event.target.checked ? 50 : 0)
                }
                {...label}
                checked={initialState.sports > 0}
              />
            </div>
            {initialState.sports ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('sports', evt.target.value)
                }
                size={'small'}
                value={initialState.sports}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <Typography>Многоквартирные дома</Typography>
              <Switch
                onChange={(event) =>
                  handleChangeField('houses', event.target.checked ? 50 : 0)
                }
                {...label}
                checked={initialState.houses > 0}
              />
            </div>
            {initialState.houses ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('houses', evt.target.value)
                }
                size={'small'}
                value={initialState.houses}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              <Typography>Метро, МЦК, МЦД</Typography>
              <Switch
                {...label}
                onChange={(event) =>
                  handleChangeField(
                    'underground',
                    event.target.checked ? 50 : 0
                  )
                }
                checked={initialState.underground > 0}
              />
            </div>
            {initialState.underground ? (
              <Slider
                onChange={(evt) =>
                  handleChangeField('underground', evt.target.value)
                }
                size={'small'}
                value={initialState.underground}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            ) : null}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '24px',
          padding: '20px 24px 24px 24px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: theme.palette.text.secondary,
            borderRadius: '12px'
          }}
          color="primary"
          fullWidth={true}
          onClick={() => handleSearchPostamats()}
        >
          Поиск
        </Button>
        <Button variant="outlined" color="primary" sx={{
          borderRadius: '12px'
        }} fullWidth={true}>
          Сбросить фильтр
        </Button>
      </Box>
      {error && (
        <Alert
          sx={{
            zIndex: 1000,
            position: 'fixed',
            top: '96px',
            right: '15px',
          }}
          severity="error"
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}
    </Box>
  );
};

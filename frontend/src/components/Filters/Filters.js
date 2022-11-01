import {useLocation} from 'react-router-dom';
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
    FormControl, Checkbox, Slider,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    ITEM_HEIGHT,
    ITEM_PADDING_TOP,
    MenuProps,
    names,
} from './Filters.constants';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CircleIcon from '@mui/icons-material/Circle';
import Switch from "@mui/material/Switch";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const Filters = () => {
    const theme = useTheme();
    const location = useLocation();
    const path = location.pathname;
    const [expanded, setExpanded] = useState([false, true, true]);
    const [showFilters, setShowFilters] = useState(false);
    const handleChange = (panel, index) => (event, isExpanded) => {
        let expandedCopy = expanded
        expandedCopy[index] = !isExpanded
        setExpanded([...expandedCopy]);
    };

    //===================================API=================================================================
    const [region, setRegion] = useState([]);
    const [district, setDistrict] = useState([]);
    const [model, setModel] = useState([]);
    const [nPostamats, setNPostamats] = useState(0);
    const [isAutoCalc, setIsAutoCalc] = useState(true);

    console.log(region);

    const [kiosks, setKiosks] = useState(0);
    const [multifunctionalCenter, setMultifunctionalCenter] = useState(0);
    const [libraries, setLibraries] = useState(0);
    const [underground, setUnderground] = useState(0);
    const [houses, setHouses] = useState(100);
    const [cultureHouses, setCultureHouses] = useState(0);
    const [sports, setSports] = useState(0);

    //===================================END API=============================================================

    const handleChangeKiosks = (event) => {
        setKiosks(event.target.value);
    }
    const handleChangeMultifunctionalCenter = (event) => {
        setMultifunctionalCenter(event.target.value);
    }
    const handleChangeLibraries = (event) => {
        setLibraries(event.target.value);
    }
    const handleChangeUnderground = (event) => {
        setUnderground(event.target.value);
    }
    const handleChangeHouses = (event) => {
        setHouses(event.target.value);
    }
    const handleChangeCultureHouses = (event) => {
        setCultureHouses(event.target.value);
    }
    const handleChangeSports = (event) => {
        setSports(event.target.value);
    }

    const handleChangeRegion = (event) => {
        const {
            target: {value},
        } = event;
        setRegion(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleChangeAutoCalc= (event) => {
        setIsAutoCalc(!isAutoCalc);
    }

    const handleChangeDistrict = (event) => {
        const {
            target: {value},
        } = event;
        setDistrict(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleChangeModel = (event) => {
        const {
            target: {value},
        } = event;
        setModel(
            typeof value === 'string' ? value.split(',') : value
        );

    };

    const handleChangeNPostamats = (event) => {
        setNPostamats(event.target.value)
    }

    //-------------------------------------------------------------------

    if (path !== '/') return;

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
                endIcon={<ArrowForwardIosIcon/>}
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
                            value={region}
                            onChange={handleChangeRegion}
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
                                    style={getStyles(name, region, theme)}
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
                            value={district}
                            onChange={handleChangeDistrict}
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
                                    style={getStyles(name, region, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>

                        {/*<TextField fullWidth label="fullWidth" id="fullWidth" />*/}
                    </AccordionDetails>
                </Accordion>

                <div style={{marginTop: '16px'}}></div>
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
                                multiple={true}
                                InputLabelProps={{shrink: false}}
                                fullWidth={true}
                                sx={selectStyles}
                                value={model}
                                label={'Age'}
                                placeholder={'skj'}
                                onChange={handleChangeModel}
                                input={<OutlinedInput label="Name"/>}
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
                                        style={getStyles(name, region, theme)}
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
                            // InputLabelProps={{
                            //     shrink: false,
                            // }}
                            onChange={handleChangeNPostamats}
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
                        <div style={{
                            marginTop: '20px',
                            background: theme.palette.divider,
                            borderRadius: '12px',
                            display: 'flex',
                            padding: '16px'
                        }}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography>
                                    Все типы объектов
                                </Typography>
                                <Typography>
                                    Мы предложим их оптимальное соотношение
                                </Typography>
                            </div>
                            <Checkbox
                                onChange={handleChangeAutoCalc}
                                {...label}
                                checked={isAutoCalc}
                                icon={<PanoramaFishEyeIcon/>}
                                checkedIcon={<CircleIcon/>}
                            />
                        </div>

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '28px', paddingBottom: '8px'}}>
                            <Typography>Киоски</Typography>
                            <Switch onChange={(event) => setKiosks(event.target.checked ? 50 : 0)} checked={kiosks > 0} {...label}  />
                        </div>
                        {kiosks ? <Slider onChange={handleChangeKiosks} size={'small'} value={kiosks} aria-label="Default" valueLabelDisplay="auto" /> : null}

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '8px'}}>
                            <Typography>МФЦ</Typography>
                            <Switch onChange={(event) => setMultifunctionalCenter(event.target.checked ? 50 : 0)}checked={multifunctionalCenter > 0} {...label}  />
                        </div>
                        {multifunctionalCenter ? <Slider onChange={handleChangeMultifunctionalCenter} size={'small'} value={multifunctionalCenter} aria-label="Default" valueLabelDisplay="auto" /> : null}

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '8px'}}>
                            <Typography>Библиотеки</Typography>
                            <Switch onChange={(event) => setLibraries(event.target.checked ? 50 : 0)}checked={libraries > 0} {...label}  />
                        </div>
                        {libraries ? <Slider onChange={handleChangeLibraries} size={'small'} value={libraries} aria-label="Default" valueLabelDisplay="auto" />: null}

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '8px'}}>
                            <Typography>Дома культуры и клубы</Typography>
                            <Switch onChange={(event) => setCultureHouses(event.target.checked ? 50 : 0)} {...label} checked={cultureHouses > 0}/>
                        </div>
                        {cultureHouses ? <Slider onChange={handleChangeCultureHouses} size={'small'} value={cultureHouses} aria-label="Default" valueLabelDisplay="auto" />: null}

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '8px'}}>
                            <Typography>Спортивные объекты</Typography>
                            <Switch  onChange={(event) => setSports(event.target.checked ? 50 : 0)}{...label} checked={sports > 0} />
                        </div>
                        {sports ? <Slider onChange={handleChangeSports} size={'small'} value={sports} aria-label="Default" valueLabelDisplay="auto" /> : null}

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '8px'}}>
                            <Typography>Многоквартирные дома</Typography>
                            <Switch onChange={(event) => setHouses(event.target.checked ? 50 : 0)} {...label} checked={houses > 0} />
                        </div>
                        {houses ? <Slider onChange={handleChangeHouses} size={'small'} value={houses} aria-label="Default" valueLabelDisplay="auto" /> : null}

                        <div style={{alignItems: 'center', display:"flex", justifyContent: 'space-between', paddingTop: '8px', paddingBottom: '8px'}}>
                            <Typography>Метро, МЦК, МЦД</Typography>
                            <Switch  {...label} onChange={(event) => setUnderground(event.target.checked ? 50 : 0)} checked={underground > 0}/>
                        </div>
                        {underground ? <Slider onChange={handleChangeUnderground} size={'small'} value={underground} aria-label="Default" valueLabelDisplay="auto" /> : null}

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

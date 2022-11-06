import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useTheme} from "@mui/material/styles";

export const MapsHeaderAction = ({ showFilters, setShowFilters }) => {
    const theme = useTheme()
  const handleShowFilters = () => {
    setShowFilters((prev) => !prev);
  };
  return (
    <Button
        variant={'contained'}
        style={{
            borderRadius: '12px',
            padding: '12px 24px',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.action.selected,
            boxShadow: 'none',
            marginRight: '8px',
        }}
      onClick={() => handleShowFilters()}
      endIcon={
        !showFilters ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
      }
    >
      {showFilters ? 'Скрыть поиск' : 'Параметры поиска'}
    </Button>
  );
};

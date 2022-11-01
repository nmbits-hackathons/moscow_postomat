import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MapsHeaderAction = ({ showFilters, setShowFilters }) => {
  const handleShowFilters = () => {
    setShowFilters((prev) => !prev);
  };
  return (
    <Button
      onClick={() => handleShowFilters()}
      endIcon={
        !showFilters ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />
      }
    >
      {showFilters ? 'Скрыть поиск' : 'Параметры поиска'}
    </Button>
  );
};

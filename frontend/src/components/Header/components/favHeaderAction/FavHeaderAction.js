import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const FavHeaderAction = () => {
  const theme = useTheme()
  return (
    <Typography variant={'h6'} color={theme.palette.text.primary}>Избранное</Typography>
  );
};

import { InputAdornment, TextField } from '@mui/material';
import { FilterComponentProps } from '../../../../../interfaces/reportTypes';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TextFilter = ({ field }: FilterComponentProps) => {
  return (
    <TextField
      sx={{
        padding: '0px',
        lineHeight: '5px',
        fontSize: '12px',
        '& input::placeholder': {
          fontSize: '12px',
          fontStyle: 'italic',
        },
        '& .MuiTextField-root': {
          padding: 0,
        },
      }}
      inputProps={{ style: { fontSize: 12 } }}
      InputLabelProps={{ style: { fontSize: 12, padding: 0 } }}
      id={field}
      fullWidth
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment
            sx={{
              cursor: 'pointer',
            }}
            position="end"
          >
            <ExpandMoreIcon sx={{ fontSize: '18px' }} />
          </InputAdornment>
        ),
      }}
      placeholder="Search Keyword"
      variant="standard"
      type="search"
    />
  );
};

export default TextFilter;

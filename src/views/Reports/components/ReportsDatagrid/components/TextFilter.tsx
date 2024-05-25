import { InputAdornment, TextField } from '@mui/material';
import { FilterComponentProps } from '../../../../../interfaces/reportTypes';

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
            <span style={{ padding: '5px' }}>
              <ExpandButton />
            </span>
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

const ExpandButton = () => {
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.94 0.719727L4 3.77973L7.06 0.719727L8 1.66639L4 5.66639L0 1.66639L0.94 0.719727Z" fill="#3C4C5B" />
    </svg>
  );
};

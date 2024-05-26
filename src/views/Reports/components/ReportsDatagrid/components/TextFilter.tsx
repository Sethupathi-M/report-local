import { InputAdornment, TextField } from '@mui/material';
import { FilterComponentProps, IndexReportColumnField } from '../../../../../interfaces/reportTypes';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { columnFiltersActions } from '../../../../../slice/reports/columnFilters.slice';
import { useReportTabContext } from '../../ReportTabContext';

const TextFilter = ({
  params: {
    field,
    colDef: { filterData },
  },
}: FilterComponentProps) => {
  const [typedValue, setTypedValue] = useState(filterData ?? '');
  const { value } = useReportTabContext();
  const dispatch = useDispatch();

  const submitData = () => {
    dispatch(
      columnFiltersActions.updateField({
        tabValue: value as number,
        field: field as IndexReportColumnField,
        value: typedValue as string,
      })
    );
  };

  // console.log(typedValue);

  return (
    <TextField
      sx={{
        padding: '0px',
        lineHeight: '5px',
        fontSize: '12px',
        '& input::placeholder': {
          color: '#BDBDBD',
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
      onBlur={submitData}
      onKeyDown={e => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') submitData();
      }}
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
      value={typedValue}
      onChange={e => setTypedValue(e?.target?.value ?? '')}
    />
  );
};

export default TextFilter;

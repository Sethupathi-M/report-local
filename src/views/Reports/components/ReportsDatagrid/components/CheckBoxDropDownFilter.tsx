import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FilterComponentProps, IndexReportColumnField } from '../../../../../interfaces/reportTypes';
import { InputAdornment, ListItemButton, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { columnFiltersActions } from '../../../../../slice/reports/columnFilters.slice';
import { useReportTabContext } from '../../ReportTabContext';

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'Val 1', value: 'Value1' },
  { label: 'Val 2', value: 'Value2' },
  { label: 'Val 3', value: 'Value3' },
  { label: 'Val 4', value: 'Value4' },
];

const CheckBoxDropDownFilter = ({ params }: FilterComponentProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>((params?.colDef?.filterData as string[]) ?? []);
  const [displayValue, setDisplayValue] = useState<string>(selectedOptions.join(', '));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const tab = useReportTabContext();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      columnFiltersActions.updateField({
        tabValue: tab.value as number,
        field: params.field as IndexReportColumnField,
        value: selectedOptions,
      })
    );
    setDisplayValue(selectedOptions.join(', '));
    setAnchorEl(null);
  };

  const handleToggle = (value: string) => () => {
    const currentIndex = selectedOptions.indexOf(value);
    const newChecked = [...selectedOptions];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedOptions(newChecked);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
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
        onClick={handleClick}
        inputProps={{ style: { fontSize: 12, cursor: 'pointer' } }}
        InputLabelProps={{ style: { fontSize: 12, padding: 0 } }}
        value={displayValue}
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
        type="text"
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{ marginLeft: '-10px' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List sx={{ width: params.colDef.computedWidth }}>
          {options.map(option => (
            <ListItemButton key={option.value} onClick={handleToggle(option.value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedOptions.indexOf(option.value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={option.label} />
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default CheckBoxDropDownFilter;

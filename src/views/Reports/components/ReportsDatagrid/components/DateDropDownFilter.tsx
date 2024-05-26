import React, { useState } from 'react';
import { FilterComponentProps, IndexReportColumnField } from '../../../../../interfaces/reportTypes';
import { InputAdornment, MenuItem, TextField, Select, SelectChangeEvent, Popover, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { FilterDataType, columnFiltersActions } from '../../../../../slice/reports/columnFilters.slice';
import { useReportTabContext } from '../../ReportTabContext';

const DateDropDownFilter = ({
  params: {
    field,
    colDef: { filterData, width },
  },
}: FilterComponentProps) => {
  const currencies = [
    {
      value: 'Today',
      label: 'Today',
    },
    {
      value: 'Yesterday',
      label: 'Yesterday',
    },
    {
      value: 'ThisWeek',
      label: 'This Week',
    },
    {
      value: 'LastWeek',
      label: 'Last Week',
    },
    {
      value: 'LastMonth',
      label: 'Last Month',
    },
  ];

  const [value, setValue] = useState<string>((filterData as string) ?? '');

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
    dispatch(
      columnFiltersActions.updateField({
        tabValue: tabData.value as number,
        field: field as IndexReportColumnField,
        value: selectedValue as FilterDataType,
      })
    );
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const tabData = useReportTabContext();
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
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
        value={value}
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
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Stack width={width}>
          {currencies.map(option => (
            <MenuItem
              key={option.value}
              selected={option.value === value}
              value={option.value}
              onClick={() => handleChange(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export default DateDropDownFilter;

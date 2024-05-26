import { Box, Popover, Stack, TextField, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { FilterComponentProps } from '../../../../../interfaces/reportTypes';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { columnFiltersActions } from '../../../../../slice/reports/columnFilters.slice';
import { useReportTabContext } from '../../ReportTabContext';

interface DateType {
  start: number;
  end: number;
}
const NumberRangeFilter = ({ params }: FilterComponentProps) => {
  const { end, start } = params.colDef.filterData as DateType;
  // console.log(params);

  const { value } = useReportTabContext();
  const [min, setMin] = useState<null | number>((params.colDef.filterData as DateType).start ?? 0);
  const [max, setMax] = useState<null | number>((params.colDef.filterData as DateType).end ?? 0);

  const getDisplayValue = useCallback(() => {
    if (min && max) return `${min} - ${max}`;
    if (min) return `${min} - any`;
    if (max) return `any - ${max}`;

    return '';
  }, [max, min]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const [displayValue, setDisplayValue] = useState(getDisplayValue());

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();

  const handleClose = () => {
    setDisplayValue(getDisplayValue());

    dispatch(
      columnFiltersActions.updateField({
        tabValue: value as number,
        field: params.colDef.field,
        value: { start: min, end: max },
      })
    );
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const styles = {
    width: '75px',
    padding: '0px',
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input::placeholder': {
      fontSize: '12px',
      fontStyle: 'italic',
    },
  };

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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box height={'130px'} width={params.colDef.computedWidth}>
          <Stack padding={'15px'} spacing={1} justifyContent={'left'}>
            <Typography variant="body1">Search Range: </Typography>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              direction={{ xs: 'column', sm: 'row', md: 'row' }}
              spacing={{ xs: 1, md: 1 }}
            >
              <OutlinedInput
                inputProps={{
                  style: {
                    padding: 12,
                  },
                }}
                placeholder="Min"
                sx={styles}
                id="min"
                type="number"
                value={min ?? ''}
                onChange={e => setMin(e?.target?.value ? parseInt(e?.target?.value) : null)}
              />
              <Typography>{' - '}</Typography>
              <OutlinedInput
                placeholder="Max"
                inputProps={{
                  style: {
                    padding: 12,
                  },
                }}
                sx={styles}
                id="max"
                type="number"
                value={max ?? ''}
                onChange={e => setMax(e?.target?.value ? parseInt(e?.target?.value) : null)}
              />
            </Stack>
          </Stack>
        </Box>
      </Popover>
    </>
  );
};

export default NumberRangeFilter;

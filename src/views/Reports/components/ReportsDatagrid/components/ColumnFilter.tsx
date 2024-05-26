import React from 'react';
import { GridColumnHeaderParams } from '@mui/x-data-grid-pro';
import { ColumnFilterType, FilterComponentProps, ReportColumnDef } from '../../../../../interfaces/reportTypes';
import CheckBoxDropDownFilter from './CheckBoxDropDownFilter';
import DateDropDownFilter from './DateDropDownFilter';
import NumberRangeFilter from './NumberRangeFilter';
import TextFilter from './TextFilter';
import { Box } from '@mui/material';

const ColumnFilter = ({ params }: FilterComponentProps) => {
  const renderFilter = () => {
    if (params.colDef.filterType === ColumnFilterType.CheckboxDropDown) {
      return <CheckBoxDropDownFilter params={params}></CheckBoxDropDownFilter>;
    } else if (params.colDef.filterType === ColumnFilterType.DateDropDown) {
      return <DateDropDownFilter params={params}></DateDropDownFilter>;
    } else if (params.colDef.filterType === ColumnFilterType.NumberInput) {
      return <NumberRangeFilter params={params}></NumberRangeFilter>;
    } else if (params.colDef.filterType === ColumnFilterType.TextInput) {
      return <TextFilter params={params}></TextFilter>;
    }
  };

  return <Box height={'26px'}>{renderFilter()}</Box>;
};

export default ColumnFilter;

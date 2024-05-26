import { GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid-pro';
import { useCallback, useEffect, useState, useMemo } from 'react';
import {
  ColumnHeaderParams,
  IndexReportColumnField,
  ReportColumnDef,
  ReportType,
  sampleColumnsForFilterCheck,
} from '../../../interfaces/reportTypes';
import DataCell from '../components/ReportsDatagrid/components/DataCell';
import { SampleColumns } from '../constants';
import ColumnHeader from '../components/ReportsDatagrid/components/ColumnHeader';
import { commonColumnProps } from './../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useReportTabContext } from '../components/ReportTabContext';
import { RootState } from '../../../store';
import state from './../../../../node_modules/@faker-js/faker/dist/types/locales/hr/location/county.d';
import { ColumnFilters, FilterDataType, selectColumnFilterByPanel } from '../../../slice/reports/columnFilters.slice';

const useColumns = ({
  reportType,
  isColumnDataReady,
  filterData,
}: {
  reportType: ReportType;
  isColumnDataReady: boolean;
  filterData: ColumnFilters;
}) => {
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const [columnDef, setColumnDef] = useState<ReportColumnDef[]>([]);

  const getColumnWidth = (gridColSpan: number, width: number) => {
    const singleGridPartWidth = width / 12;

    return singleGridPartWidth * gridColSpan;
  };

  const computeColumns = useCallback(
    (columns: ReportColumnDef[], width: number) => {
      if (filterData == undefined) return [];

      return columns.map(colDef => {
        return {
          ...colDef,
          width: getColumnWidth(colDef.gridColSpan, width),
          renderHeader: (headerParams: GridColumnHeaderParams) => (
            <ColumnHeader params={headerParams as ColumnHeaderParams}></ColumnHeader>
          ),
          renderCell: (cellParams: GridRenderCellParams) => <DataCell params={cellParams}></DataCell>,
          filterData: filterData[colDef.field] as FilterDataType,
          ...commonColumnProps,
        };
      });
    },
    [filterData]
  );

  const handleResize = useCallback(() => {
    if (!parentElement) return null;
    const computedColumns: ReportColumnDef[] = computeColumns(sampleColumnsForFilterCheck, parentElement?.clientWidth);
    setColumnDef(computedColumns);
  }, [computeColumns, parentElement]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [computeColumns, handleResize, parentElement]);

  const onParentRefChange = useCallback((node: HTMLElement) => {
    if (node === null) return;

    setParentElement(node);
  }, []);

  return { columnDef, onParentRefChange };
};

export default useColumns;

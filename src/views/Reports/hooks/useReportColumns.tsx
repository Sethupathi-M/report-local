import { GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid-pro';
import { useCallback, useEffect, useState } from 'react';
import { ReportColumnDef } from '../../../interfaces/reportTypes';
import DataCell from '../components/ReportsDatagrid/components/DataCell';
import { SampleColumns } from '../constants';
import ColumnHeader from '../components/ReportsDatagrid/components/ColumnHeader';

const useColumns = () => {
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const [columnDef, setColumnDef] = useState<ReportColumnDef[]>([]);

  const getColumnWidth = (gridColSpan: number, width: number) => {
    const singleGridPartWidth = width / 12;

    return singleGridPartWidth * gridColSpan;
  };

  useEffect(() => {
    function handleResize() {
      if (!parentElement) return null;
      const computedColumns: ReportColumnDef[] = SampleColumns.map(colDef => {
        return {
          ...colDef,
          width: getColumnWidth(colDef.gridColSpan, parentElement?.clientWidth),
          renderHeader: (headerParams: GridColumnHeaderParams) => <ColumnHeader params={headerParams}></ColumnHeader>,
          renderCell: (cellParams: GridRenderCellParams) => <DataCell params={cellParams}></DataCell>,
        };
      });
      setColumnDef(computedColumns);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [parentElement]);

  const onParentRefChange = useCallback((node: HTMLElement) => {
    if (node === null) return;

    setParentElement(node);
  }, []);

  return { columnDef, onParentRefChange };
};

export default useColumns;

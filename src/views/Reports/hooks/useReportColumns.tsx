import { GridRenderCellParams } from '@mui/x-data-grid-pro';
import { useCallback, useEffect, useState } from 'react';
import { ReportColumnDef } from '../../../interfaces/reportTypes';
import DataCell from '../components/ReportsDatagrid/components/DataCell';
import TextFilter from '../components/ReportsDatagrid/components/TextFilter';
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
          renderHeader: function Component() {
            return <ColumnHeader gridColDef={colDef}></ColumnHeader>;
          },
          renderCell: (params: GridRenderCellParams) => {
            return <DataCell params={params}></DataCell>;
          },
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

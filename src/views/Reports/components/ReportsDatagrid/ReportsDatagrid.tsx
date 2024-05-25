import { Box, LinearProgress } from '@mui/material';
import { GridPinnedColumns } from '@mui/x-data-grid-pro';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PerPageOptionList } from '../../constants';
import SampleRows from '../../data/IndexReport.json';
import useColumns from '../../hooks/useReportColumns';
import { StyledDataGridPro } from '../../styles';

const ReportsDatagrid = () => {
  const { t } = useTranslation();
  const [pageSize, setPageSize] = useState(PerPageOptionList[0]);
  const [pinnedColumns, setPinnedColumns] = useState<GridPinnedColumns>({
    left: [],
    right: [],
  });
  const { columnDef, onParentRefChange } = useColumns();

  const isLoading = false;
  const isBackgroundLoading = false;

  return (
    <Box width="100%" height="100%" ref={onParentRefChange}>
      <StyledDataGridPro
        disableColumnMenu
        disableColumnFilter
        disableColumnSelector
        disableColumnResize
        disableSelectionOnClick
        components={{
          LoadingOverlay: function Component() {
            return <LinearProgress sx={{ marginTop: '-2px' }} />;
          },
        }}
        loading={isLoading}
        rows={SampleRows}
        componentsProps={{
          pagination: {
            labelRowsPerPage: t('views.reports.grid.rowsPerPage'),
          },
        }}
        rowHeight={32}
        columns={columnDef}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={PerPageOptionList}
        pagination
        pinnedColumns={pinnedColumns}
        isBackgroundLoading={isBackgroundLoading}
        onPinnedColumnsChange={updatedPinnedColumns => setPinnedColumns(updatedPinnedColumns)}
      ></StyledDataGridPro>
    </Box>
  );
};

export default ReportsDatagrid;

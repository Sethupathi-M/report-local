import { Box, LinearProgress } from '@mui/material';
import { GridFilterModel, GridLinkOperator, GridPinnedColumns, GridFilterItem } from '@mui/x-data-grid-pro';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PerPageOptionList } from '../../constants';
import SampleRows from '../../data/IndexReport.json';
import useColumns from '../../hooks/useReportColumns';
import { StyledDataGridPro } from './styles';
import sampleData from '../../data/NewColumnFilterPocSampleData.json';
import { useReportTabContext } from '../ReportTabContext';
import { DynamicTabDetails, IndexReportColumnField, ReportType, TabType } from '../../../../interfaces/reportTypes';
import { useDispatch, useSelector } from 'react-redux';
import { columnFiltersActions, selectColumnFilterByPanel } from '../../../../slice/reports/columnFilters.slice';
import { RootState } from '../../../../store';
import NoDataModal from '../NoDataModel';
import useData from '../LoadingInfiniteDat';

let reRenderCount = 0;

const ReportsDatagrid = () => {
  const { t } = useTranslation();
  const [pageSize, setPageSize] = useState(PerPageOptionList[0]);
  const [pinnedColumns, setPinnedColumns] = useState<GridPinnedColumns>({
    left: [],
    right: [],
  });

  const tabData = useReportTabContext();
  const [filterModal, setFilterModal] = useState<GridFilterItem[]>([]);
  const dispatch = useDispatch();
  const columnFilters = useSelector((state: RootState) => selectColumnFilterByPanel(tabData?.value ?? 0)(state));

  // console.log(`Datagrid Render Count:`, reRenderCount);
  // console.log(columnFilters);

  reRenderCount = reRenderCount + 1;
  // // console.log({ filterModal });
  // // console.log(columnFilters);

  useEffect(() => {
    if (columnFilters && Object.keys(columnFilters).length > 0) {
      const items: GridFilterItem[] = Object.entries(columnFilters)
        .map(([key, value], index) => {
          debugger;
          if (key === 'MyNumber')
            return {
              id: 1,
              columnField: key,
              operatorValue: 'between',
              value: { start: value?.start, end: value?.end },
            };
          else if (key === 'MyCheckBoxList') {
            return { id: 2, columnField: key, operatorValue: 'isAnyOf', value: value };
          } else if (key === 'MyText') {
            return { id: 3, columnField: key, operatorValue: 'startsWith', value: value };
          } else if (key === 'MyDate') {
            debugger;
            return { id: 4, columnField: key, operatorValue: 'compareDates', value: value };
          }
          return null;
        })
        .filter(item => item !== null) as GridFilterItem[];

      setFilterModal(items);
    }
  }, [columnFilters]);

  // console.log(columnFilters?.MyNumber);

  useEffect(() => {
    if (tabData != null && !!!columnFilters) {
      dispatch(
        columnFiltersActions.init({
          tabDetails: tabData,
          columnFilters: {
            id: 0,
            MyCheckBoxList: ['Value1'],
            MyDate: '',
            MyNumber: {
              start: 1,
              end: 1000,
            },
            MyText: 't',
          },
        })
      );
    }
  }, [columnFilters, dispatch, tabData]);

  const { columnDef, onParentRefChange } = useColumns({
    reportType: ReportType.IndexReport,
    isColumnDataReady: true,
    filterData: columnFilters,
  });
  // const data = useData();
  // console.log({ data });

  useEffect(() => {
    console.log('Mounted');

    return () => {
      console.log('Unmounted');
    };
  }, []);
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
          NoResultsOverlay: function Component() {
            return <NoDataModal />;
          },
        }}
        loading={isLoading}
        rows={sampleData}
        filterModel={{
          items: filterModal,
          linkOperator: GridLinkOperator.And,
        }}
        componentsProps={{
          pagination: {
            labelRowsPerPage: t('views.reports.grid.rowsPerPage'),
          },
        }}
        rowHeight={32}
        columns={columnDef}
        pageSize={pageSize}
        columnVisibilityModel={{
          id: false,
        }}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={PerPageOptionList}
        pagination
        pinnedColumns={pinnedColumns}
        isBackgroundLoading={isBackgroundLoading}
        onPinnedColumnsChange={updatedPinnedColumns => setPinnedColumns(updatedPinnedColumns)}
        // Note: below properties are kept to avoid column level virtualization,
        // which causes glitch on horizontal scroll
        columnBuffer={columnDef.length}
        columnThreshold={columnDef.length}
      ></StyledDataGridPro>
    </Box>
  );
};

export default ReportsDatagrid;

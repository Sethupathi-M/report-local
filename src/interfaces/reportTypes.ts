/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
  GridFilterItem,
  GridFilterOperator,
} from '@mui/x-data-grid-pro';
import dayjs from 'dayjs';
import { FilterDataType } from '../slice/reports/columnFilters.slice';

const ALL_REPORTS = 'AllReports';
const INDEX_REPORT = 'IndexReport';
const USER_REPORT = 'UserReport';
const TEAM_REPORT = 'TeamReport';
const QNA_REPORT = 'QnAReport';
const SAVED_REPORT = 'SavedReport';
const SCHEDULED_REPORT = 'ScheduledReport';

export enum ReportType {
  IndexReport = INDEX_REPORT,
  UserReport = USER_REPORT,
  TeamReport = TEAM_REPORT,
  QnAReport = QNA_REPORT,
  SavedReport = SAVED_REPORT,
  ScheduledReport = SCHEDULED_REPORT,
}

export enum StaticTabs {
  AllReports = ALL_REPORTS,
}

export enum TabType {
  StaticTab,
  DynamicTab,
}

export interface StaticTabDetails {
  tabType: TabType.StaticTab;
  value?: string;
  label: string;
}

export interface DynamicTabDetails {
  tabType: TabType.DynamicTab;
  value?: number;
  label: string;
  reportType: ReportType;
  originalReportType?: ReportType;
  reportId?: string;
}
export type ReportTabDetails = StaticTabDetails | DynamicTabDetails;

export interface ComponentMap {
  [key: string]: () => JSX.Element;
}

export interface ReportColumnDef extends GridColDef {
  gridColSpan: number;
  filterType: ColumnFilterType;
  filterData?: FilterDataType | null;
  field: IndexReportColumnField;
}

export type ColumnHeaderParams = GridColumnHeaderParams & { colDef: ReportColumnDef };
export interface FilterComponentProps {
  params: ColumnHeaderParams;
}

export enum GridCellAlignment {
  Right = 'right',
  Left = 'left',
  Center = 'center',
}

export enum ColumnFilterType {
  None = 0,
  DateDropDown,
  TextInput,
  NumberInput,
  CheckboxDropDown,
}

export enum IndexReportColumnField {
  id = 'id',
  MyNumber = 'MyNumber',
  MyDate = 'MyDate',
  MyText = 'MyText',
  MyCheckBoxList = 'MyCheckBoxList',
}
const betweenTwoNumbersOperator: GridFilterOperator[] = [
  {
    label: 'Between',
    value: 'between',
    getApplyFilterFn: (filterItem: GridFilterItem, column: GridColDef) => {
      debugger;
      if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
        return null;
      }

      return (params: GridCellParams): boolean => {
        return (
          Number(params.value) >= Number(filterItem.value.start) && Number(params.value) <= Number(filterItem.value.end)
        );
      };
    },
  },
];

const betweenTwoDatesOperator: GridFilterOperator[] = [
  {
    label: 'CompareDates',
    value: 'compareDates',
    getApplyFilterFn: (filterItem: GridFilterItem, column: GridColDef) => {
      debugger;
      if (!filterItem.columnField || !filterItem.value || !filterItem.operatorValue) {
        return null;
      }

      return (params: GridCellParams): boolean => {
        const date = dayjs(params.value);

        const today = dayjs();

        switch (filterItem.value) {
          case 'Today':
            return date.isSame(today, 'day');
          case 'Yesterday':
            return date.isSame(today.subtract(1, 'day'), 'day');
          case 'ThisWeek':
            return date.isSame(today, 'week');
          case 'LastWeek':
            const lastWeekStart = today.subtract(1, 'week').startOf('week');
            const lastWeekEnd = today.subtract(1, 'week').endOf('week');

            return date.isAfter(lastWeekStart) && date.isBefore(lastWeekEnd);
          case 'LastMonth':
            const lastMonthStart = today.subtract(1, 'month').startOf('month');
            const lastMonthEnd = today.subtract(1, 'month').endOf('month');

            return date.isAfter(lastMonthStart) && date.isBefore(lastMonthEnd);
          default:
            return true;
        }
      };
    },
  },
];

export const sampleColumnsForFilterCheck: ReportColumnDef[] = [
  {
    field: IndexReportColumnField.id,
    headerName: 'ID',
    filterType: ColumnFilterType.None,
    gridColSpan: 0,
    hide: true,
  },
  {
    field: IndexReportColumnField.MyNumber,
    headerName: 'My Number',
    filterType: ColumnFilterType.NumberInput,
    gridColSpan: 2,
    filterOperators: betweenTwoNumbersOperator,
  },
  {
    field: IndexReportColumnField.MyDate,
    headerName: 'My Date',

    filterType: ColumnFilterType.DateDropDown,
    gridColSpan: 3,
    filterOperators: betweenTwoDatesOperator,
  },
  {
    field: IndexReportColumnField.MyText,
    headerName: 'My Text',
    filterType: ColumnFilterType.TextInput,
    gridColSpan: 2,
  },
  {
    field: IndexReportColumnField.MyCheckBoxList,
    headerName: 'My CheckBox List',
    filterType: ColumnFilterType.CheckboxDropDown,
    gridColSpan: 3,
  },
];

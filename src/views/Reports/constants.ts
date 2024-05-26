import IndexReportIcon from '../../../src/assets/icons/index-report.svg';
import QnAReportIcon from '../../../src/assets/icons/qna-report.svg';
import TeamReportIcon from '../../../src/assets/icons/team-report.svg';
import UserReportIcon from '../../../src/assets/icons/user-report.svg';
import {
  ColumnFilterType,
  ComponentMap,
  GridCellAlignment,
  ReportColumnDef,
  ReportType,
  StaticTabs,
} from '../../interfaces/reportTypes';
import AllReports from './views/AllReports/AllReports';
import IndexReport from './views/IndexReport';
import QnAReport from './views/QnAReport';
import TeamReport from './views/TeamReport';
import UserReport from './views/UserReport';

export const ALL_REPORTS_ITEM_LIST: { reportType: ReportType; icon: any }[] = [
  { reportType: ReportType.IndexReport, icon: IndexReportIcon },
  { reportType: ReportType.UserReport, icon: UserReportIcon },
  { reportType: ReportType.TeamReport, icon: TeamReportIcon },
  { reportType: ReportType.QnAReport, icon: QnAReportIcon },
];

export const StaticTabPanelMap: ComponentMap = {
  [StaticTabs.AllReports]: AllReports,
};

export const DynamicTabPanelMap: ComponentMap = {
  [ReportType.IndexReport]: IndexReport,
  [ReportType.QnAReport]: QnAReport,
  [ReportType.UserReport]: UserReport,
  [ReportType.TeamReport]: TeamReport,
};

export const StaticReportTypes = [ReportType.SavedReport, ReportType.ScheduledReport];

export const DynamicReportTypes = [
  ReportType.IndexReport,
  ReportType.QnAReport,
  ReportType.TeamReport,
  ReportType.UserReport,
];

export const PerPageOptionList = [50, 100, 150, 200];

export const commonColumnProps = {
  filterable: false,
  sortable: false,
  hideSortIcons: true,
  disableColumnMenu: true,
};

export const SampleColumns: ReportColumnDef[] = [
  {
    field: 'IndexNo',
    headerName: 'Index No',
    gridColSpan: 3,
    align: GridCellAlignment.Right,
    filterType: ColumnFilterType.TextInput,
  },
  {
    field: 'Title',
    align: GridCellAlignment.Right,
    headerName: 'Title',
    gridColSpan: 4,
    filterType: ColumnFilterType.DateDropDown,
  },
  { field: 'Type', align: 'right', headerName: 'Type', gridColSpan: 2, filterType: ColumnFilterType.NumberInput },
  { field: 'FileExt', headerName: 'File Extension', gridColSpan: 2, filterType: ColumnFilterType.CheckboxDropDown },
  { field: 'CurrentIndex', headerName: 'Current Index', gridColSpan: 2, filterType: ColumnFilterType.TextInput },
  { field: 'RootIndex', headerName: 'Root Index', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'SizeMB', headerName: 'Size (MB)', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'NoOfPages', headerName: 'No. of Pages', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'Status', headerName: 'Status', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'Action', headerName: 'Action', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'ActionBy', headerName: 'Action By', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'ActionDate', headerName: 'Action Date', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  { field: 'ActionTime', headerName: 'Action Time', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  {
    field: 'TimeSpentPerDocument',
    headerName: 'Time Spent (Per Document)',
    gridColSpan: 1,
    filterType: ColumnFilterType.TextInput,
  },
  { field: 'NoOfQAitems', headerName: 'No. of QA Items', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
  {
    field: 'ConvertedFileSizeMB',
    headerName: 'Converted File Size (MB)',
    gridColSpan: 1,
    filterType: ColumnFilterType.TextInput,
  },
  { field: 'StatusDate', headerName: 'Status Date', gridColSpan: 1, filterType: ColumnFilterType.TextInput },
];

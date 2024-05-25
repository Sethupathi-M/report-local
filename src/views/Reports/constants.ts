import IndexReportIcon from '../../../src/assets/icons/index-report.svg';
import QnAReportIcon from '../../../src/assets/icons/qna-report.svg';
import TeamReportIcon from '../../../src/assets/icons/team-report.svg';
import UserReportIcon from '../../../src/assets/icons/user-report.svg';
import { ComponentMap, ReportColumnDef, ReportType, StaticTabs } from '../../interfaces/reportTypes';
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

export const SampleColumns: ReportColumnDef[] = [
  {
    filterable: true,
    field: 'IndexNo',
    headerName: 'Index No',
    gridColSpan: 3,
    sortable: false,
    hideSortIcons: true,
    align: 'right',
    disableColumnMenu: true,
  },
  {
    filterable: true,
    field: 'Title',
    align: 'left',
    headerName: 'Title',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 4,
  },
  {
    filterable: true,
    field: 'Type',
    align: 'right',
    headerName: 'Type',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 2,
  },
  {
    filterable: true,
    field: 'FileExt',
    headerName: 'File Extension',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 2,
  },
  {
    filterable: true,
    field: 'CurrentIndex',
    headerName: 'Current Index',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 2,
  },

  {
    filterable: true,
    field: 'RootIndex',
    headerName: 'Root Index',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'SizeMB',
    headerName: 'Size (MB)',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'NoOfPages',
    headerName: 'No. of Pages',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'Status',
    headerName: 'Status',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'Action',
    headerName: 'Action',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'ActionBy',
    headerName: 'Action By',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'ActionDate',
    headerName: 'Action Date',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'ActionTime',
    headerName: 'Action Time',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    filterable: true,
    field: 'TimeSpentPerDocument',
    headerName: 'Time Spent (Per Document)',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    field: 'NoOfQAitems',
    headerName: 'No. of QA Items',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    field: 'ConvertedFileSizeMB',
    headerName: 'Converted File Size (MB)',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
  {
    field: 'StatusDate',
    headerName: 'Status Date',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridColSpan: 1,
  },
];

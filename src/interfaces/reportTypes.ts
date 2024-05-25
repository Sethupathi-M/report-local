import { GridColDef } from '@mui/x-data-grid-pro';

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
}

export interface FilterComponentProps {
  field: string;
}

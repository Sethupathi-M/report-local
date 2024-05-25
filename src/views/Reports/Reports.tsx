import { Typography } from '@mui/material';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ReportTabDetails } from '../../interfaces/reportTypes';
import ReportTabPanel from './components/ReportTabPanel';
import ReportsTabList from './components/ReportsTabList';
import { DynamicTabPanelMap, StaticTabPanelMap } from './constants';
import useReportTabsController from './hooks/useReportTabsController';
import { StyledReportsContainer, StyledReportsInnerContainer, StyledReportsTabsContainer } from './styles';
import ReportTabDetailsProvider from './components/ReportTabContext';

const Reports = (): JSX.Element => {
  const { t } = useTranslation();
  const { staticTabs, dynamicTabs, activeTabPanelIndex } = useReportTabsController();

  const renderTabPanel = useCallback(
    (tab: ReportTabDetails, tabPanelValue: number, key: string, ComponentToRender: React.FC) => {
      if (!ComponentToRender) return null;

      return (
        <ReportTabDetailsProvider tab={tab}>
          <ReportTabPanel key={key} value={tabPanelValue} index={activeTabPanelIndex}>
            <ComponentToRender />
          </ReportTabPanel>
        </ReportTabDetailsProvider>
      );
    },
    [activeTabPanelIndex]
  );

  return (
    <StyledReportsContainer>
      <Typography variant="h1">{t('views.reports.reports')}</Typography>

      <StyledReportsTabsContainer container>
        <StyledReportsInnerContainer item>
          <ReportsTabList />
          {staticTabs.map(
            (tab, index) => tab.value && renderTabPanel(tab, index, tab.label, StaticTabPanelMap[tab.value])
          )}

          {dynamicTabs.map(
            (tab, index) =>
              tab.reportType &&
              renderTabPanel(tab, index + staticTabs.length, tab.reportType, DynamicTabPanelMap[tab.reportType])
          )}
        </StyledReportsInnerContainer>
      </StyledReportsTabsContainer>
    </StyledReportsContainer>
  );
};

export default Reports;

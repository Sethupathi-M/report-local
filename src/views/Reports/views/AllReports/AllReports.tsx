import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReportType, TabType } from '../../../../interfaces/reportTypes';
import { ALL_REPORTS_ITEM_LIST } from '../../constants';
import useReportTabsController from '../../hooks/useReportTabsController';
import { StyledSubtitleTypography } from '../../styles';
import ReportListItem from './components/ReportListItem';
import MyPocGrid from '../../components/MyPocGrid';
import TabPanelContainer from '../../components/TabPanelContainer';
import ReportsDatagrid from '../../components/ReportsDatagrid/ReportsDatagrid';

const grid = false;

const AllReports = (): JSX.Element => {
  const { t } = useTranslation();
  const { open } = useReportTabsController();

  const handleItemClick = (reportType: ReportType) => {
    open({
      label: t(`views.reports.tabTitles.${reportType}`),
      tabType: TabType.DynamicTab,
      reportType: reportType,
    });
  };

  return (
    <>
      {grid ? (
        <TabPanelContainer>
          <ReportsDatagrid />
        </TabPanelContainer>
      ) : (
        <TabPanelContainer>
          <StyledSubtitleTypography>{t('views.reports.allReportsTab.subTitle')}</StyledSubtitleTypography>
          <Grid container direction="column" alignItems={'center'}>
            {ALL_REPORTS_ITEM_LIST.map(item => (
              <ReportListItem key={item.reportType} onItemClick={handleItemClick} {...item} />
            ))}
          </Grid>
        </TabPanelContainer>
      )}
    </>
  );
};

export default AllReports;

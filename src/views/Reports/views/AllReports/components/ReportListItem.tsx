import { SvgIconComponent } from '@mui/icons-material';
import { Grid, SvgIcon, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReportType } from '../../../../../interfaces/reportTypes';
import { StyledIconContainer, StyledReportListItem } from '../../../styles';

interface ReportListItemProps {
  reportType: ReportType;
  icon: SvgIconComponent;
  onItemClick: (reportType: ReportType) => void;
}
const ReportListItem = ({ icon: Icon, reportType, onItemClick }: ReportListItemProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledReportListItem container item onClick={() => onItemClick(reportType)}>
      <Grid item xs={3}>
        <StyledIconContainer>
          <SvgIcon>
            <Icon />
          </SvgIcon>

          <Typography variant="body2">{t(`views.reports.allReportsTab.list.${reportType}.title`)}</Typography>
        </StyledIconContainer>
      </Grid>
      <Grid item xs={9}>
        {t(`views.reports.allReportsTab.list.${reportType}.summary`)}
      </Grid>
    </StyledReportListItem>
  );
};

export default ReportListItem;

import { useTranslation } from 'react-i18next';
import NoDataToDisplayIcon from '../../../../src/assets/icons/noDataToDisplay-crossIcon.svg';
import { Box, Typography } from '@mui/material';

const NoDataModal = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ backgroundColor: 'white' }}
      width={'100%'}
      height={'100%'}
      flexDirection={'column'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'7px'}
    >
      <NoDataToDisplayIcon style={{ width: '36px', height: '36px' }}></NoDataToDisplayIcon>

      <Typography variant="h2">{t('views.reports.noDataOverlay.text')}</Typography>
      <Typography variant="body1">{t('views.reports.noDataOverlay.subText')}</Typography>
    </Box>
  );
};

export default NoDataModal;

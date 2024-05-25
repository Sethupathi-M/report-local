import { Box, IconButton, Typography } from '@mui/material';
import { ReportColumnDef } from '../../../../../interfaces/reportTypes';
import TextFilter from './TextFilter';
import ActionButtons from './ActionButtons';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ColumnHeader = ({ gridColDef }: { gridColDef: ReportColumnDef }) => {
  return (
    <Box width={'100%'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'}>
          <Typography fontSize={'10px'}>{gridColDef.headerName}</Typography>
          <IconButton size="small">
            <ArrowUpwardIcon sx={{ height: '12px', width: '12px' }}></ArrowUpwardIcon>
          </IconButton>
        </Box>
        <ActionButtons></ActionButtons>
      </Box>

      <TextFilter field={gridColDef.field}></TextFilter>
    </Box>
  );
};

export default ColumnHeader;

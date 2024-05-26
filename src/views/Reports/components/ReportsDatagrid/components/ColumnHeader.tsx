import { Box, IconButton, Typography } from '@mui/material';
import TextFilter from './TextFilter';
import ActionButtons from './ActionButtons';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { GridColumnHeaderParams } from '@mui/x-data-grid-pro';
import ColumnFilter from './ColumnFilter';
import { ColumnHeaderParams } from '../../../../../interfaces/reportTypes';

const ColumnHeader = ({ params }: { params: ColumnHeaderParams }) => {
  return (
    <Box width={'100%'} height={'100%'}>
      <Box height={'50%'} display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'}>
          <Typography fontSize={'10px'}>{params.colDef.headerName}</Typography>
          <IconButton size="small">
            <ArrowUpwardIcon sx={{ height: '12px', width: '12px' }}></ArrowUpwardIcon>
          </IconButton>
        </Box>
        <ActionButtons></ActionButtons>
      </Box>

      <ColumnFilter params={params}></ColumnFilter>
    </Box>
  );
};

export default ColumnHeader;

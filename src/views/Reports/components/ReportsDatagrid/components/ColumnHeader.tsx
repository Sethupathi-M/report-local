import { Box, IconButton, Typography } from '@mui/material';
import TextFilter from './TextFilter';
import ActionButtons from './ActionButtons';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { GridColumnHeaderParams } from '@mui/x-data-grid-pro';

const ColumnHeader = ({ params }: { params: GridColumnHeaderParams }) => {
  return (
    <Box width={'100%'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'}>
          <Typography fontSize={'10px'}>{params.colDef.headerName}</Typography>
          <IconButton size="small">
            <ArrowUpwardIcon sx={{ height: '12px', width: '12px' }}></ArrowUpwardIcon>
          </IconButton>
        </Box>
        <ActionButtons></ActionButtons>
      </Box>

      <TextFilter field={params.field}></TextFilter>
    </Box>
  );
};

export default ColumnHeader;

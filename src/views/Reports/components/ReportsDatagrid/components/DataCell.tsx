import { Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid-pro';
import { appTheme } from '../../../../../appTheme';

const DataCell = ({ params }: { params: GridRenderCellParams }) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems={'center'}
      justifyContent={params.colDef.align}
      sx={{
        borderBottom: `1px solid ${appTheme.palette.secondary.dark}`,
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 400, paddingLeft: '10px' }}>
        {params.value}
      </Typography>
    </Box>
  );
};

export default DataCell;

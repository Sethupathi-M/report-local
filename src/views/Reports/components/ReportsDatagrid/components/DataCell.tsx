import { Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid-pro';
import { DataCellContainer } from '../styles';

const DataCell = ({ params }: { params: GridRenderCellParams }) => {
  return (
    <DataCellContainer justifyContent={params.colDef.align}>
      <Typography variant="h6">{params.value}</Typography>
    </DataCellContainer>
  );
};

export default DataCell;

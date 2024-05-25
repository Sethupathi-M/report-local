// New changes
import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Menu } from '@mui/material';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { appTheme } from '../../../../appTheme';
import { rem } from '../../styles';

export const CELL_PADDING_HORIZONTAL = rem(10);
export const COLUMN_HEADER_BORDER_BOTTOM = rem(2);

export const StyledDataGridPro = styled(DataGridPro, {
  shouldForwardProp: prop => prop !== 'isBackgroundLoading',
})(({ isBackgroundLoading }: { isBackgroundLoading: boolean }) => ({
  backgroundColor: appTheme.palette.common.white,
  borderRadius: 0,
  height: '100%',

  '& .MuiDataGrid-columnHeaders': {
    lineHeight: 1.4,
    border: 'transparent',
  },
  '& .MuiDataGrid-columnHeaderDraggableContainer': {
    borderBottom: isBackgroundLoading
      ? 'transparent'
      : `${COLUMN_HEADER_BORDER_BOTTOM} solid ${appTheme.palette.secondary.dark}}`,
  },
  '& .MuiDataGrid-columnHeader, & .MuiDataGrid-row .MuiDataGrid-cell': {
    border: 'transparent',
  },

  '& .MuiDataGrid-columnHeaderTitleContainerContent': {
    width: '100%',
    paddingLeft: CELL_PADDING_HORIZONTAL,
    paddingRight: CELL_PADDING_HORIZONTAL,
    paddingTop: rem(10),
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    lineHeight: 1.4,
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none !important',
  },
}));

export const DataCellContainer = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  borderBottom: `${rem(1)} solid ${appTheme.palette.secondary.dark}`,
  paddingLeft: CELL_PADDING_HORIZONTAL,
  paddingRight: CELL_PADDING_HORIZONTAL,
});

export const StyledMoreVertIcon = styled(MoreVertIcon)({
  width: '17px',
  height: '18px',
  padding: '0px',
});

export const StyledColumnMenu = styled(Menu)({
  '& .MuiPaper-root': {
    borderRadius: '3.2px',
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
    marginTop: '12px',
  },
});

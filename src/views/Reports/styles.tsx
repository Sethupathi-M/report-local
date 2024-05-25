import { Box, Grid, IconButton, Tab, Tabs, Typography, styled } from '@mui/material';
import { appTheme } from '../../appTheme';
import CloseIcon from '@mui/icons-material/Close';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { BorderBottom } from '@mui/icons-material';

const rem = (pixels: number) => `${pixels / 16}rem`;

export const StyledReportTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    height: rem(4),
  },
});

export const StyledReportTab = styled(Tab)({
  minHeight: rem(40),
  paddingLeft: rem(24),
  paddingRight: rem(24),

  '&.Mui-selected': {
    fontWeight: 600,
  },
});

export const StyledReportListItem = styled(Grid)({
  alignItems: 'center',
  backgroundColor: appTheme.palette.common.white,
  border: '1px solid transparent',
  borderRadius: rem(10),
  boxShadow: '0 4px 4px rgba(60, 76, 91, 0.05)',
  boxSizing: 'border-box',
  cursor: 'pointer',
  height: '100%',
  minWidth: '100%',
  opacity: 1,
  width: '100%',
  margin: '0px',
  paddingTop: rem(16),
  paddingBottom: rem(16),
  paddingLeft: rem(16),
  marginBottom: rem(16),

  '&:hover': {
    borderColor: appTheme.palette.primary.main,
  },
});

export const StyledReportsContainer = styled(Box)({
  marginTop: rem(20),
});

export const StyledReportsTabsContainer = styled(Grid)({
  width: '100%',
  justifyContent: 'center',
});

export const StyledReportsInnerContainer = styled(Grid)({
  marginTop: rem(20),
  width: '100%',
});

export const StyledSubtitleTypography = styled(Typography)({
  fontSize: rem(16),
  marginTop: rem(25),
  marginBottom: rem(16),
});

export const StyledIconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: rem(12),
});

export const StyledTabLabel = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledCloseIconButton = styled(IconButton)({
  padding: '0px',
  marginLeft: rem(5),
});

export const StyledCloseIcon = styled(CloseIcon, {
  shouldForwardProp: prop => prop !== 'isActive',
})(({ isActive }: { isActive: boolean }) => ({
  width: rem(16),
  height: rem(16),
  color: isActive ? appTheme.palette.primary.main : appTheme.palette.secondary.main,
}));

// New changes
export const StyledDataGridPro = styled(DataGridPro, {
  shouldForwardProp: prop => prop !== 'pinnedColumnCount',
})(({ isBackgroundLoading }: { isBackgroundLoading: boolean }) => ({
  backgroundColor: appTheme.palette.common.white,
  borderRadius: 0,
  height: '100%',
  // marginTop: '40px',

  '& .MuiDataGrid-columnHeaders': {
    lineHeight: 1.4,
    border: 'transparent',
  },
  '& .MuiDataGrid-columnHeaderDraggableContainer': {
    // borderBottom: isBackgroundLoading ? 'transparent' : `2px solid ${appTheme.palette.secondary.dark}`,
    borderBottom: isBackgroundLoading ? 'transparent' : `2px solid ${appTheme.palette.secondary.dark}`,
  },
  '& .MuiDataGrid-columnHeader': {
    // borderBottom: '2px solid red !important',
    // background: 'red',
  },
  // '& .MuiDataGrid-columnHeadersInner': {
  //   marginLeft: pinnedColumnCount > 0 ? `${pinnedColumnCount * 20}px` : '0px',
  // },

  // '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
  //   marginRight: '20px',
  // },
  '& .MuiDataGrid-columnHeader, & .MuiDataGrid-row .MuiDataGrid-cell': {
    border: 'transparent',
  },

  '& .MuiDataGrid-columnHeaderTitleContainerContent': {
    width: '100%',
    paddingLeft: '10px',
    paddingTop: '10px',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    lineHeight: 1.4,
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  // '& .MuiDataGrid-menuIcon': {
  //   display: 'none',
  // },
}));

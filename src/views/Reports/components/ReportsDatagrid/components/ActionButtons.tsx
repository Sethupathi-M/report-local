import { Box, IconButton } from '@mui/material';
import React from 'react';
import ColumnMenu from './ColumnMenu';
import ReOrder from '../../../../../assets/icons/reorder.svg';

const ActionButtons = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} gap={'5px'} alignItems={'center'}>
      <IconButton size="small">
        <ReOrder />
      </IconButton>
      <ColumnMenu></ColumnMenu>
    </Box>
  );
};

export default ActionButtons;

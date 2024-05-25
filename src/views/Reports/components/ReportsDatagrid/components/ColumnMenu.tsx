import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import React, { MouseEvent } from 'react';
import { StyledColumnMenu, StyledMoreVertIcon } from '../styles';

const ColumnMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="medium"
        aria-controls={open ? 'column-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{ padding: '0px' }}
      >
        <StyledMoreVertIcon />
      </IconButton>

      <StyledColumnMenu
        anchorEl={anchorEl}
        id="column-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>Sort Ascending</MenuItem>{' '}
        <MenuItem onClick={handleClose}>Sort Descending</MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClose}>Lock Column</MenuItem> <MenuItem onClick={handleClose}>Manage Columns</MenuItem>
      </StyledColumnMenu>
    </>
  );
};

export default ColumnMenu;

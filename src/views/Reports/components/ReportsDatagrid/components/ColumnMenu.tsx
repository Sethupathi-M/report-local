import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import React, { MouseEvent } from 'react';

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
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{ padding: '0px' }}
        aria-label="delete"
      >
        <MoreVertIcon sx={{ width: '17px', height: '18px', padding: '0px' }}></MoreVertIcon>
      </IconButton>
      <Menu
        sx={{
          '& .MuiPaper-root': {
            borderRadius: 0.4,
          },
        }}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>Sort Ascending</MenuItem>{' '}
        <MenuItem onClick={handleClose}>Sort Descending</MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClose}>Lock Column</MenuItem> <MenuItem onClick={handleClose}>Manage Columns</MenuItem>
      </Menu>
    </>
  );
};

export default ColumnMenu;

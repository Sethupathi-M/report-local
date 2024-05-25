import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  Menu,
  MenuItem,
  Popover,
  TextField,
  Typography,
  ListItemIcon,
  Skeleton,
  Select,
} from '@mui/material';
import {
  GridColDef,
  GridColumnHeaderParams,
  GridPinnedColumnFields,
  GridRenderCellParams,
  useGridApiRef,
} from '@mui/x-data-grid-pro';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledDataGridPro } from '../styles';
import sampledata from '../data/IndexReport.json';
import { appTheme } from '../../../appTheme';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoDataModal from './NoDataModel';
import ReOrder from '../../../assets/icons/reorder.svg';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const columns: GridColDef[] = [
  {
    filterable: true,
    field: 'IndexNo',
    headerName: 'Index No',
    gridParts: 3,
    sortable: false,
    hideSortIcons: true,
    align: 'right',
    disableColumnMenu: true,
  },
  {
    filterable: true,
    field: 'Title',
    align: 'left',
    headerName: 'Title',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 4,
    // filterable: false,
  },
  {
    filterable: true,
    field: 'Type',
    align: 'right',
    headerName: 'Type',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 2,
  },
  {
    filterable: true,
    field: 'FileExt',
    headerName: 'File Extension',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 2,
  },
  {
    filterable: true,
    field: 'CurrentIndex',
    headerName: 'Current Index',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 2,
  },

  {
    filterable: true,
    field: 'RootIndex',
    headerName: 'Root Index',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'SizeMB',
    headerName: 'Size (MB)',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'NoOfPages',
    headerName: 'No. of Pages',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'Status',
    headerName: 'Status',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'Action',
    headerName: 'Action',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'ActionBy',
    headerName: 'Action By',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'ActionDate',
    headerName: 'Action Date',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'ActionTime',
    headerName: 'Action Time',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    filterable: true,
    field: 'TimeSpentPerDocument',
    headerName: 'Time Spent (Per Document)',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    field: 'NoOfQAitems',
    headerName: 'No. of QA Items',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    field: 'ConvertedFileSizeMB',
    headerName: 'Converted File Size (MB)',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  {
    field: 'StatusDate',
    headerName: 'Status Date',
    hideSortIcons: true,
    sortable: false,
    disableColumnMenu: true,
    gridParts: 1,
  },
  // { field: 'id', headerName: 'ID',, gridParts:1 },
];

const MyPocGrid = () => {
  const [pinnedColumns, setPinnedColumns] = useState<GridPinnedColumnFields>({
    left: [],
  });
  const isLoading = false;
  const renderTextBoxCell = (params: GridRenderCellParams<any, string>) => {
    const isLOading = false;
    // console.log(params.colDef.align);

    return (
      <>
        {isLOading ? (
          <Box
            sx={{
              width: '70%',
              height: '100%',
              flexDirection: 'column',
              display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          >
            {/* <Skeleton sx={{ flex: 1 }} /> */}
            <Skeleton animation="wave" sx={{ flex: 1 }} />
          </Box>
        ) : (
          <Box
            width="100%"
            height="100%"
            display="flex"
            alignItems={'center'}
            justifyContent={params.colDef.align}
            // alignContent={}
            sx={{
              borderBottom: `1px solid ${appTheme.palette.secondary.dark}`,
            }}
          >
            <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 400, paddingLeft: '10px' }}>
              {params.value}
            </Typography>
          </Box>
        )}
      </>
    );
  };
  const handlePinnedColumnsChange = useCallback((updatedPinnedColumns: GridPinnedColumnFields) => {
    setPinnedColumns(updatedPinnedColumns);
  }, []);

  const [columnDef, setColumnDef] = useState<GridColDef[]>([]);
  console.log({ columnDef });

  const getColumnWidth = (gridParts: number, width: number) => {
    const singleGridPartWidth = width / 12;
    const gap = 0;

    return singleGridPartWidth * gridParts - gap;
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    // Add more options as needed
  });

  const handleClick = (event: any) => {
    debugger;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (event: any) => {
    setOptions({ ...options, [event.target.name]: event.target.checked });
  };

  const open = Boolean(anchorEl);

  const value = Object.entries(options)
    .filter(([key, value]) => value === true)
    .map(item => item['0'])
    .join(', ');

  console.log({ pinnedColumns });

  const renderHeaderTextSearch = useCallback(
    (label: string, id: string, align: string): JSX.Element => {
      const isLOading = false;

      return (
        <>
          {isLOading ? (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
              }}
            >
              {/* <Skeleton sx={{ flex: 1 }} /> */}
              <Skeleton animation="wave" />
            </Box>
          ) : (
            <Box width={'100%'}>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                  <Typography fontSize={'10px'}>{label}</Typography>
                  <IconButton size="small">
                    <ArrowUpwardIcon sx={{ height: '12px', width: '12px' }}></ArrowUpwardIcon>
                  </IconButton>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={'5px'} alignItems={'center'}>
                  <IconButton size="small">
                    <ReOrder />
                  </IconButton>
                  {/* <MovableIcon></MovableIcon> */}
                  <ColumnMenu></ColumnMenu>
                </Box>
              </Box>

              <TextField
                sx={{
                  padding: '0px',
                  lineHeight: '5px',
                  fontSize: '12px',
                  '& input::placeholder': {
                    // paddingTop: '0',
                    fontSize: '12px',
                    fontStyle: 'italic',
                  },
                  '& .MuiTextField-root': {
                    padding: 0,
                  },
                }}
                inputProps={{ style: { fontSize: 12 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 12, padding: 0 } }} // font size of input label
                id={id}
                value={value}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  // sx: { width: '8px', height: '4px' },
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        cursor: 'pointer',
                        // , width: '8px', height: '8px'
                      }}
                      position="end"
                    >
                      {/* <ExpandMoreIcon
                    onClick={e => {
                      handleClick(e);
                    }}
                  /> */}
                      <span style={{ padding: '5px' }}>
                        <ExpandButton />
                      </span>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Keyword"
                variant="standard"
                // slots={{
                //   // Hide `columnMenuColumnsItem`

                // }}
                // onChange={RootIndexhandleChange}
                type="search"
                onClick={e => {
                  handleClick(e);
                  e.stopPropagation();
                }}
              />
            </Box>
          )}
        </>
      );
    },
    [value]
  );

  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (!parentElement) return null;
      // Set window width/height to state
      const newColumnDef1: GridColDef[] = columns.map((data, index) => {
        return {
          ...data,

          width: getColumnWidth(data.gridParts, parentElement?.clientWidth),
          renderHeader: (params: GridColumnHeaderParams) => {
            return renderHeaderTextSearch(data.headerName, data.field);
          },
          renderCell: renderTextBoxCell,
        };
      });

      setColumnDef(newColumnDef1);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup

    return () => window.removeEventListener('resize', handleResize);
  }, [parentElement, renderHeaderTextSearch]);

  const [offsetHeight, setOffsetHeight] = useState(0);

  const onRefChange = useCallback((node: HTMLElement) => {
    if (node === null) return;

    setParentElement(node);

    if (node) {
      setOffsetHeight(node?.offsetTop);
    }
  }, []);

  const { t } = useTranslation();
  const [pageSize, setPageSize] = useState(10);
  // console.log(pinnedColumns.length);

  return (
    <Box width={'100%'} height={`calc(100vh - ${offsetHeight}px)`} ref={onRefChange}>
      {/* <Select onClose={}></Select> */}
      {/* <NoDataModal></NoDataModal> */}
      <StyledDataGridPro
        filterModel={{
          items: [
            // {
            //   columnField: 'Title',
            //   operatorValue: 'startsWith',
            //   value: 'a',
            // },
            // {
            //   columnField: 'IndexNo',
            //   operatorValue: 'startsWith',
            //   value: 'a',
            // },
          ],
        }}
        disableColumnMenu
        disableColumnFilter
        initialState={{
          columns: {
            orderedFields: ['Title', 'IndexNo'],
          },
        }}
        // hideFooter={true}
        // hideFooterPagination={true}
        components={{
          LoadingOverlay: () => <LinearProgress sx={{ marginTop: '-2px' }} />,
          NoRowsOverlay: NoDataModal,
        }}
        loading={isLoading}
        // sortingMode="client"
        // filterMode="client"
        // paginationMode="server"

        disableColumnSelector
        disableColumnResize={true}
        disableSelectionOnClick
        rows={sampledata}
        // onColumnOrderChange={columnOrder => {
        //   const { field, targetIndex } = columnOrder; // Destructure column Name // and it's target Index
        //   console.log(columnOrder);
        // }}
        componentsProps={{
          pagination: {
            labelRowsPerPage: t('views.reports.grid.rowsPerPage'),
          },
        }}
        rowHeight={32}
        columns={columnDef}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50, 100, 150, 200]}
        pagination
        pinnedColumns={pinnedColumns}
        isBackgroundLoading={isLoading}
        onPinnedColumnsChange={handlePinnedColumnsChange}
        // headerHeight={60}
      ></StyledDataGridPro>
      <Popover
        // id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ padding: '16px' }}>
          <Typography variant="h6">Settings</Typography>
          <FormControlLabel
            control={<Checkbox checked={options.option1} onChange={handleCheckboxChange} name="option1" />}
            label="Option 1"
          />
          <FormControlLabel
            control={<Checkbox checked={options.option2} onChange={handleCheckboxChange} name="option2" />}
            label="Option 2"
          />
          <FormControlLabel
            control={<Checkbox checked={options.option3} onChange={handleCheckboxChange} name="option3" />}
            label="Option 3"
          />
        </div>
      </Popover>
    </Box>
  );
};

export default MyPocGrid;

const MovableIcon = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.25313 5.79817V3.17173L7.56651 4.48495L6.25313 5.79817ZM8.11441 4.7608C8.15043 4.72486 8.17901 4.68216 8.19851 4.63516C8.21801 4.58816 8.22804 4.53778 8.22804 4.48689C8.22804 4.43601 8.21801 4.38562 8.19851 4.33862C8.17901 4.29162 8.15043 4.24892 8.11441 4.21298L6.33084 2.42964C6.08993 2.18487 5.67027 2.35582 5.67027 2.70161V6.2644C5.67027 6.61019 6.08993 6.78503 6.33473 6.54026L8.11441 4.7608ZM2.56166 6.26829V2.70161C2.56166 2.35582 2.142 2.18098 1.8972 2.42575L0.113637 4.20909C0.0776142 4.24504 0.0490355 4.28773 0.0295362 4.33473C0.0100369 4.38174 0 4.43212 0 4.48301C0 4.53389 0.0100369 4.58428 0.0295362 4.63128C0.0490355 4.67828 0.0776142 4.72097 0.113637 4.75692L1.8972 6.54026C2.142 6.78503 2.56166 6.61408 2.56166 6.26829Z"
        fill="#D2D8DD"
      />
      <line
        x1="4.31087"
        y1="1.56966"
        x2="4.31087"
        y2="7.39648"
        stroke="#D2D8DD"
        stroke-width="1.16667"
        stroke-linecap="round"
      />
    </svg>
  );
};

const ExpandButton = () => {
  return (
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.94 0.719727L4 3.77973L7.06 0.719727L8 1.66639L4 5.66639L0 1.66639L0.94 0.719727Z" fill="#3C4C5B" />
    </svg>
  );
};

const ColumnMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
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
        // sx={{ ml: 2 }}
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

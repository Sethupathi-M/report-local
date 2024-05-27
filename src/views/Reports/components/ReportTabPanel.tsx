import { Box } from '@mui/material';
import React from 'react';

interface ReportTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ReportTabPanel = (props: ReportTabPanelProps): JSX.Element => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      style={{
        display: value === index ? 'block' : 'none',
      }}
      id={`reports-tabpanel-${value}`}
      aria-labelledby={`reports-tab-${value}`}
      {...other}
    >
      {value === index && <Box key={index}>{children}</Box>}
    </div>
  );
};

export default ReportTabPanel;

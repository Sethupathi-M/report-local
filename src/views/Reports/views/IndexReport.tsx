import React from 'react';
import MyPocGrid from '../components/MyPocGrid';
import TabPanelContainer from '../components/TabPanelContainer';
import ReportsDatagrid from '../components/ReportsDatagrid/ReportsDatagrid';

const IndexReport = (): JSX.Element => {
  return (
    <TabPanelContainer>
      <ReportsDatagrid></ReportsDatagrid>
    </TabPanelContainer>
  );
};

export default IndexReport;

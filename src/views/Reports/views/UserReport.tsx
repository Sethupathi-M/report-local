import React from 'react';
import TabPanelContainer from '../components/TabPanelContainer';
import ReportsDatagrid from '../components/ReportsDatagrid/ReportsDatagrid';

const UserReport = (): JSX.Element => {
  return (
    <TabPanelContainer>
      <ReportsDatagrid />
    </TabPanelContainer>
  );
};

export default UserReport;

import { Divider, Grid } from '@mui/material';
import { SyntheticEvent, useCallback } from 'react';
import { DynamicTabDetails } from '../../../interfaces/reportTypes';
import useReportTabsController from '../hooks/useReportTabsController';
import { StyledCloseIcon, StyledCloseIconButton, StyledReportTab, StyledReportTabs, StyledTabLabel } from '../styles';

const ReportsTabList = (): JSX.Element => {
  const {
    staticTabs,
    dynamicTabs,
    isDynamicTabsActive,
    isStaticTabsActive,
    activeTab,
    open,
    close,
    isActiveDynamicTab,
  } = useReportTabsController();

  const handleCloseIcon = useCallback(
    (e: SyntheticEvent, tab: DynamicTabDetails) => {
      close(tab);
      e.stopPropagation();
    },
    [close]
  );

  const renderDynamicTabLabel = useCallback(
    (tab: DynamicTabDetails) => (
      <StyledTabLabel>
        {tab.label}
        <StyledCloseIconButton onClick={e => handleCloseIcon(e, tab)}>
          <StyledCloseIcon isActive={isActiveDynamicTab(tab)} />
        </StyledCloseIconButton>
      </StyledTabLabel>
    ),
    [handleCloseIcon, isActiveDynamicTab]
  );

  const renderStaticTabs = useCallback(
    () => (
      <StyledReportTabs variant="fullWidth" value={isStaticTabsActive ? activeTab?.value : false}>
        {staticTabs.map(tab => (
          <StyledReportTab onClick={() => open(tab)} key={tab.label} value={tab.value} label={tab.label} />
        ))}
      </StyledReportTabs>
    ),
    [activeTab, isStaticTabsActive, open, staticTabs]
  );

  const renderDynamicTabs = useCallback(
    () => (
      <StyledReportTabs
        variant="scrollable"
        scrollButtons="auto"
        value={isDynamicTabsActive ? activeTab?.value : false}
      >
        {dynamicTabs.map(tab => (
          <StyledReportTab
            sx={{ width: '25%' }}
            onClick={() => open(tab)}
            key={tab.value}
            value={tab.value}
            label={renderDynamicTabLabel(tab)}
          />
        ))}
      </StyledReportTabs>
    ),
    [activeTab, dynamicTabs, isDynamicTabsActive, open, renderDynamicTabLabel]
  );

  return (
    <Grid display="flex" sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Grid item flex={0.25}>
        {renderStaticTabs()}
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item flex={1}>
        {renderDynamicTabs()}
      </Grid>
    </Grid>
  );
};

export default ReportsTabList;

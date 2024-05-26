import { combineReducers } from '@reduxjs/toolkit';
import reportTabManagementSlice from './tabsManagement.slice';
import columnFiltersSlice from './columnFilters.slice';

const reportsReducers = combineReducers({
  tabs: reportTabManagementSlice,
  tabPanelColumnFilters: columnFiltersSlice,
});

export default reportsReducers;

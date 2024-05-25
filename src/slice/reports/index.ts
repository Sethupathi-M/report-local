import { combineReducers } from '@reduxjs/toolkit';
import reportTabManagementSlice from './tabsManagement.slice';

const reportsReducers = combineReducers({
  tabs: reportTabManagementSlice,
});

export default reportsReducers;

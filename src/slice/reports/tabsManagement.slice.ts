import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DynamicTabDetails, ReportTabDetails } from '../../interfaces/reportTypes';

type SliceState = {
  dynamicTabs: DynamicTabDetails[];
  isStaticTabsActive: boolean;
  isDynamicTabsActive: boolean;
  activeTab: ReportTabDetails | null;
  activeTabPanelIndex: number;
};

const initialState: SliceState = {
  dynamicTabs: [],
  isStaticTabsActive: false,
  isDynamicTabsActive: false,
  activeTab: null,
  activeTabPanelIndex: 0,
};

const reportTabManagementSlice = createSlice({
  name: 'REPORTS/tabsManagement',
  initialState,
  reducers: {
    toggleTabsStatus(state, action: PayloadAction<{ isStaticTabsActive: boolean }>) {
      state.isStaticTabsActive = action.payload.isStaticTabsActive;
      state.isDynamicTabsActive = !action.payload.isStaticTabsActive;
    },
    setActiveTab(state, action: PayloadAction<ReportTabDetails>) {
      state.activeTab = action.payload;
    },
    setActiveTabPanelIndex(state, action: PayloadAction<number>) {
      state.activeTabPanelIndex = action.payload;
    },
    setDynamicTabs(state, action: PayloadAction<DynamicTabDetails[]>) {
      state.dynamicTabs = action.payload;
    },
  },
});

export const reportsTabManagementActions = reportTabManagementSlice.actions;

export default reportTabManagementSlice.reducer;

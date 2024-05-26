/* eslint-disable */
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { DynamicTabDetails, IndexReportColumnField, ReportTabDetails } from '../../interfaces/reportTypes';
import { RootState } from '../../store';

export type ColumnFilters = {
  [IndexReportColumnField.id]: number;
  [IndexReportColumnField.MyCheckBoxList]: string[];
  [IndexReportColumnField.MyDate]: string;
  [IndexReportColumnField.MyNumber]: { start: number | null; end: number | null };
  [IndexReportColumnField.MyText]: string;
};

export type FilterDataType = string[] | string | { start: number; end: number };

type SliceState = {
  byId: { [tabPanelValue: number]: ColumnFilters };
  allIds: number[];
};

const initialState: SliceState = {
  byId: {},
  allIds: [],
};

const columnFiltersState = createSlice({
  name: 'REPORTS/columnFilters',
  initialState,
  reducers: {
    init(state, action: PayloadAction<{ tabDetails: DynamicTabDetails; columnFilters: ColumnFilters }>) {
      const tabPanelValue = action.payload.tabDetails.value;
      if (tabPanelValue !== undefined && action.payload.columnFilters) {
        state.byId[tabPanelValue] = action.payload.columnFilters;
        state.allIds.push(tabPanelValue);
      }
    },
    updateField(
      state,
      action: PayloadAction<{ tabValue: number; field: IndexReportColumnField; value: FilterDataType }>
    ) {
      const { tabValue, field, value } = action.payload;

      if (tabValue !== undefined && state.byId[tabValue] !== undefined && state.byId[tabValue][field] !== undefined) {
        // Perform type checking for value based on the field
        debugger;
        if (
          field === IndexReportColumnField.MyNumber &&
          typeof value === 'object' &&
          'start' in value &&
          'end' in value
        ) {
          state.byId[tabValue][field] = { ...state.byId[tabValue][field], ...value };
          //value as ColumnFilters[typeof field];
        } else {
          if (state.byId[tabValue]) {
            if (state.byId[tabValue][field] != null) {
              state.byId[tabValue][field] = value;
            }
          }
        }
      }
    },
  },
});

export const columnFiltersActions = columnFiltersState.actions;
export default columnFiltersState.reducer;

const selectTabsManagementState = (state: RootState) => state.reports.tabPanelColumnFilters;

const selectTabPanelById = (id: number) => createSelector([selectTabsManagementState], tabPanel => tabPanel.byId[id]);

const selectColumnFilter = (id: number) => createSelector([selectTabPanelById(id)], tabPanelState => tabPanelState);

export const selectColumnFilterByPanel = selectColumnFilter;

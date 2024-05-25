import lodash from 'lodash';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  DynamicTabDetails,
  ReportTabDetails,
  StaticTabDetails,
  StaticTabs,
  TabType,
} from '../../../interfaces/reportTypes';
import { reportsTabManagementActions } from '../../../slice/reports/tabsManagement.slice';
import { RootState } from '../../../store';
import { DynamicReportTypes, StaticReportTypes } from '../constants';

export interface UseReportTabsControllerResult {
  activeTab: ReportTabDetails | null;
  isDynamicTabsActive: boolean;
  isStaticTabsActive: boolean;
  open: (tabToClose: ReportTabDetails) => void;
  close: (tabToClose: DynamicTabDetails) => void;
  isActiveDynamicTab: (tabToCompare: DynamicTabDetails) => boolean;
  staticTabs: StaticTabDetails[];
  dynamicTabs: DynamicTabDetails[];
  activeTabPanelIndex: number;
}

const useReportTabsController = (): UseReportTabsControllerResult => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeTab, activeTabPanelIndex, dynamicTabs, isDynamicTabsActive, isStaticTabsActive } = useSelector(
    (state: RootState) => state.reports.tabs
  );

  const staticTabs: StaticTabDetails[] = useMemo(
    () =>
      Object.values(StaticTabs).map(value => {
        return {
          value: value,
          label: t(`views.reports.tabTitles.${value}`),
          tabType: TabType.StaticTab,
        };
      }),
    [t]
  );

  useEffect(() => {
    if (staticTabs.length > 0) {
      dispatch(reportsTabManagementActions.setActiveTab(staticTabs[0]));
      dispatch(reportsTabManagementActions.toggleTabsStatus({ isStaticTabsActive: true }));
    }
  }, [dispatch, staticTabs, t]);

  const getActiveTabPanelIndex = useCallback(() => {
    if (!activeTab) return 0;

    if (isStaticTabsActive && activeTab.tabType === TabType.StaticTab) return lodash.findIndex(staticTabs, activeTab);
    if (isDynamicTabsActive && activeTab.tabType === TabType.DynamicTab)
      return staticTabs.length + lodash.findIndex(dynamicTabs, activeTab);

    return 0;
  }, [activeTab, dynamicTabs, isDynamicTabsActive, isStaticTabsActive, staticTabs]);

  useEffect(() => {
    dispatch(reportsTabManagementActions.setActiveTabPanelIndex(getActiveTabPanelIndex()));
  }, [dispatch, getActiveTabPanelIndex]);

  const isActiveDynamicTab = useCallback(
    ({ reportType, originalReportType, reportId }: DynamicTabDetails) => {
      if (
        activeTab &&
        activeTab?.tabType === TabType.DynamicTab &&
        activeTab?.reportType === reportType &&
        activeTab?.originalReportType === originalReportType &&
        activeTab?.reportId === reportId
      )
        return true;

      return false;
    },
    [activeTab]
  );

  const findDynamicTab = useCallback(
    ({ reportType, originalReportType, reportId }: DynamicTabDetails) => {
      return dynamicTabs.find(openedTab => {
        if (reportType && StaticReportTypes.includes(reportType) && openedTab.reportType === reportType) {
          return true;
        }

        if (
          reportType &&
          DynamicReportTypes.includes(reportType) &&
          openedTab.reportType === reportType &&
          openedTab.originalReportType === originalReportType &&
          openedTab.reportId === reportId
        ) {
          return true;
        }

        return false;
      });
    },
    [dynamicTabs]
  );

  const createDynamicTab = useCallback(
    (tab: DynamicTabDetails): DynamicTabDetails => {
      let newTabValue = 0;
      if (dynamicTabs.length > 0) {
        newTabValue = (dynamicTabs[0]?.value ?? 0) + 1;
      }

      tab.value = newTabValue;
      dispatch(reportsTabManagementActions.setDynamicTabs([tab, ...dynamicTabs]));

      return tab;
    },
    [dispatch, dynamicTabs]
  );

  const switchDynamicTab = useCallback(
    (tab: DynamicTabDetails) => {
      let tabToSwitch = findDynamicTab(tab);
      if (!tabToSwitch) tabToSwitch = createDynamicTab(tab);

      dispatch(reportsTabManagementActions.setActiveTab(tabToSwitch));
    },
    [createDynamicTab, dispatch, findDynamicTab]
  );

  const open = useCallback(
    (tabToOpen: ReportTabDetails) => {
      const { tabType } = tabToOpen;

      if (tabType === TabType.StaticTab) {
        dispatch(reportsTabManagementActions.setActiveTab(tabToOpen));
        dispatch(reportsTabManagementActions.toggleTabsStatus({ isStaticTabsActive: true }));
      } else if (tabType === TabType.DynamicTab) {
        switchDynamicTab(tabToOpen);
        dispatch(reportsTabManagementActions.toggleTabsStatus({ isStaticTabsActive: false }));
      }
    },
    [dispatch, switchDynamicTab]
  );

  const close = useCallback(
    (tabToClose: DynamicTabDetails) => {
      if (findDynamicTab(tabToClose)) {
        const isCurrentActiveTab = isActiveDynamicTab(tabToClose);
        const currentActiveTabIndex = lodash.findIndex(dynamicTabs, tabToClose);
        const filteredTabs = dynamicTabs.filter(
          tab =>
            !(
              tab.reportType === tabToClose.reportType &&
              tab.originalReportType === tabToClose.originalReportType &&
              tab.reportId === tabToClose.reportId
            )
        );
        dispatch(reportsTabManagementActions.setDynamicTabs(filteredTabs));
        if (isCurrentActiveTab) {
          const newActiveTabIndex = currentActiveTabIndex - 1;
          if (newActiveTabIndex < 0) {
            open({ ...staticTabs[staticTabs.length - 1] });
          } else {
            open({ ...dynamicTabs[newActiveTabIndex] });
          }
        }
      }
    },
    [dispatch, dynamicTabs, findDynamicTab, isActiveDynamicTab, open, staticTabs]
  );

  return {
    activeTab,
    isDynamicTabsActive,
    isStaticTabsActive,
    open,
    close,
    staticTabs,
    dynamicTabs,
    isActiveDynamicTab,
    activeTabPanelIndex,
  };
};

export default useReportTabsController;

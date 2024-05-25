import React, { createContext, useContext, ReactNode } from 'react';
import { ReportTabDetails } from '../../../interfaces/reportTypes';

const ReportTabContext = createContext<ReportTabDetails>({} as ReportTabDetails);

export interface Props {
  tab: ReportTabDetails;
  children?: ReactNode;
}

export const ReportTabDetailsProvider: React.FC<Props> = ({ tab, children }) => {
  return <ReportTabContext.Provider value={tab}>{children}</ReportTabContext.Provider>;
};

export default ReportTabDetailsProvider;

export const useReportTabContext = () => {
  return useContext(ReportTabContext);
};

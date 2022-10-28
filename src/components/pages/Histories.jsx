/* libraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { HistoriesForm } from '..';

function Histories() {
  const path = useLocation().pathname;
  const isReportHistoryPage = path.includes('report');

  return <HistoriesForm isReportHistoryPage={isReportHistoryPage} />;
}

export default Histories;

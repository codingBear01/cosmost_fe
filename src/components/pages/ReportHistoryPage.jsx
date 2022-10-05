/* libraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { HistoryForm } from '..';

function ReportHistoryPage() {
  const path = useLocation().pathname;

  return <HistoryForm path={path} />;
}

export default ReportHistoryPage;

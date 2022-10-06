/* libraries */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { HistoryForm } from '..';

function HistoryPage() {
  /* 현재 접속한 페이지의 url에 따라 유저의 신고 내역 혹은 리뷰 조회 정보를 달리 뿌려주기 위한 state 및 pathname */
  const [isReportHistoryPage, setIsReportHistoryPage] = useState(false);
  const path = useLocation().pathname;

  /* 페이지 rendering 시 pathname에 report라는 문자열이 포함되어 있다면 isReport true로 설정 */
  useEffect(() => {
    if (path.includes('report')) {
      setIsReportHistoryPage(true);
    }
  }, [path]);

  return <HistoryForm isReportHistoryPage={isReportHistoryPage} />;
}

export default HistoryPage;

/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isReportFormOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
import { HistoryListItem } from './';
import { Button, ReportForm, UtilDiv, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import { useCallback } from 'react';

function HistoriesForm({ isReportHistoryPage }) {
  /* States */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );
  const [isHistoriesChanged, setIsHistoriesChanged] = useState(false);
  const [openingReportFormType, setOpeningReportFormType] = useState(null);
  const [report, setReport] = useState(null);
  const [myReports, setMyReports] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  /* Refs */
  const page = useRef(0);
  const observedTarget = useRef(null);

  const token = localStorage.getItem('token');

  /* Handlers */
  /* 신고 상세 조회 폼의 Open 여부를 조작하는 핸들러. 클릭 시 폼 Open 여부를 반대로 변경하고, 신고 데이터를 폼으로 props 전달하며 formRef.current에 클릭된 신고를 할당한다. */
  const onClickOpenReportForm = (e, item, type) => {
    setIsReportFormOpened(!isReportFormOpened);
    setReport(item);
    setOpeningReportFormType(type);
    formRef.current = e.target;
  };

  /* Hooks */
  /* 신고 이외 영역 클릭 시 신고 상세 조회 폼을 닫는 함수 */
  const formRef = useRef();
  useEffect(() => {
    if (openingReportFormType === 'detail') {
      const closeModal = (e) => {
        if (!formRef.current?.contains(e.target)) {
          setIsReportFormOpened(false);
        }
      };

      document.addEventListener('click', closeModal);

      return () => document.removeEventListener('click', closeModal);
    }
  }, [setIsReportFormOpened, openingReportFormType]);

  /* APIs */
  /** 신고 내역 혹은 내가 남긴 리뷰 조회 */
  const fetchHistories = useCallback(async (type) => {
    try {
      const URLS = {
        report: `${process.env.REACT_APP_API}/boards?filter=auth&sort=id,desc&page=${page.current}&size=4`,
        review: `${process.env.REACT_APP_API}/comments?filter=auth&type=review&sort=id,desc&page=${page.current}&size=4`,
      };
      const url = URLS[type];
      const config = {
        headers: {
          Authorization: token,
        },
        timeout: 3000,
      };

      const result = await axios.get(url, config);
      const { data } = result;

      isReportHistoryPage
        ? setMyReports((prev) => prev.concat(data))
        : setMyReviews((prev) => prev.concat(data));
      setIsLastPage(data[data.length - 1].whetherLastPage);

      if (!isLastPage) {
        page.current += 1;
      }
    } catch (error) {
      new Error(error);
    }
  }, []);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchHistories(isReportHistoryPage ? 'report' : 'review');
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [isLastPage]);

  return (
    <UtilDiv width={'45rem'} padding={'5rem 0'}>
      {/* 페이지 이름 */}
      <UtilTitle>
        {isReportHistoryPage ? '신고내역' : '내가 남긴 리뷰'}
      </UtilTitle>
      {/* 신고내역 목록 */}
      <S.HistoryList>
        {/* 신고 상세 조회 폼 */}
        <ReportForm
          onClick={onClickOpenReportForm}
          setIsReportFormOpened={setIsReportFormOpened}
          isReportFormOpened={isReportFormOpened}
          type={openingReportFormType}
          report={report}
          isHistoriesChanged={isHistoriesChanged}
          setIsHistoriesChanged={setIsHistoriesChanged}
        />
        {isReportHistoryPage
          ? myReports[0] &&
            myReports.map((report, index) => (
              <HistoryListItem
                key={report.id}
                report={report}
                isReportHistoryPage={isReportHistoryPage}
                onClickOpenReportForm={onClickOpenReportForm}
              />
            ))
          : myReviews[0] &&
            myReviews.map((review, index) => (
              <HistoryListItem
                key={review.id}
                review={review}
                isReportHistoryPage={isReportHistoryPage}
              />
            ))}
      </S.HistoryList>
      <div ref={observedTarget}></div>
    </UtilDiv>
  );
}

export default HistoriesForm;

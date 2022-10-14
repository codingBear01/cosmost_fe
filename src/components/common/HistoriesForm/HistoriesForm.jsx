/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isReportFormOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Button, ReportForm, UtilDiv, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import { REPORT_HISTORIES as reports } from '../../../store/temporaryArray';

function HistoriesForm({ isReportHistoryPage }) {
  /* ReportForm 및 ReportReply Open 여부 관련 state */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );
  const [isReportReplyCanOpen, setIsReportReplyCanOpen] = useState(false);
  /* 신고 상세 조회 폼에 넘겨줄 reportDetail state */
  const [reportDetail, setReportDetail] = useState(null);
  /* 내가 작성한 reviews를 할당할 state */
  const [myReviews, setMyReviews] = useState([]);

  /* Handlers */
  /* 신고 상세 조회 폼의 Open 여부를 조작하는 핸들러. 클릭 시 폼 Open 여부를 반대로 변경하고, 신고 데이터를 폼으로 props 전달하며 formRef.current에 클릭된 신고를 할당한다. */
  const onClickOpenReportDetail = (e, item) => {
    setIsReportFormOpened(!isReportFormOpened);
    setReportDetail(item);
    formRef.current = e.target;
  };

  const onClickOpenReportReply = (isReplied) => {
    if (isReplied) {
      setIsReportReplyCanOpen(!isReportReplyCanOpen);
    }
  };

  /* Hooks */
  /* 신고 이외 영역 클릭 시 신고 상세 조회 폼을 닫는 함수 */
  const formRef = useRef();
  useEffect(() => {
    const closeModal = (e) => {
      if (!formRef.current?.contains(e.target)) {
        setIsReportFormOpened(false);
      }
    };

    document.addEventListener('click', closeModal);

    return () => document.removeEventListener('click', closeModal);
  }, [setIsReportFormOpened]);

  /* APIs */
  /* 접속한 페이지가 신고 내역 페이지라면 나의 신고 내역을 불러오는 함수 */
  const getMyReviews = () => {
    const getMyReviewsUrl = `${process.env.REACT_APP_COURSE_REVIEW_DOMAIN_IP}/v1/comments?filter=auth&type=review`;
    const getMyReviewsHeaders = {
      headers: {
        Authorization: 2, // 로그인한 사용자의 식별자
      },
    };
    axios
      .get(getMyReviewsUrl, getMyReviewsHeaders)
      .then((response) => {
        setMyReviews(response.data);
      })
      .catch((error) => {
        new Error(error);
      });
  };
  useEffect(() => {
    if (!isReportHistoryPage) {
      getMyReviews();
    }
  }, [isReportHistoryPage]);

  return (
    <UtilDiv padding={'5rem 12.9rem'}>
      {/* 페이지 이름 */}
      <UtilTitle>
        {isReportHistoryPage ? '신고내역' : '내가 남긴 리뷰'}
      </UtilTitle>
      {/* 신고내역 목록 */}
      <S.HistoryList>
        {/* 신고 상세 조회 폼 */}
        <ReportForm
          onClick={onClickOpenReportDetail}
          setIsReportFormOpened={setIsReportFormOpened}
          isReportFormOpened={isReportFormOpened}
          isReportHistoryPage={isReportHistoryPage}
          item={reportDetail}
        />
        {isReportHistoryPage
          ? reports &&
            reports.map((item) => (
              // 신고 내역 아이템
              <S.HistoryListItem key={item.id}>
                {/* 신고 날짜 */}
                <S.HistoryDateAndRateWrap
                  onClick={(e) => onClickOpenReportDetail(e, item)}
                >
                  {item.date}
                </S.HistoryDateAndRateWrap>
                {/* 신고 분류 */}
                <S.ReportHistoryCat>분류: {item.category}</S.ReportHistoryCat>
                {/* 신고 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 신고 제목 */}
                  <S.HistoryTitle
                    onClick={(e) => onClickOpenReportDetail(e, item)}
                  >
                    {item.title}
                  </S.HistoryTitle>
                  {/* 답변 여부 버튼 */}
                  <Button
                    type="button"
                    width={'80px'}
                    height={'30px'}
                    fontSize={'12px'}
                    bgColor={item.isReplied ? color.darkGreen : color.darkRed}
                    hoveredBgColor={item.isReplied && color.lightGreen}
                    onClick={() => onClickOpenReportReply(item.isReplied)}
                  >
                    {item.isReplied ? '답변 완료' : '답변 미완료'}
                  </Button>
                </S.HistoryTitleWrap>
                {/* 신고 내용 */}
                <S.HistoryContent
                  onClick={(e) => onClickOpenReportDetail(e, item)}
                >
                  {item.content}
                </S.HistoryContent>
              </S.HistoryListItem>
            ))
          : myReviews &&
            myReviews.map((item) => (
              // 리뷰 조회 아이템
              <S.HistoryListItem key={item.id}>
                {/* 리뷰 날짜 */}
                <S.HistoryDateAndRateWrap>
                  <span>{item.createdAt}</span>
                  <span>⭐ {item.rate}</span>
                </S.HistoryDateAndRateWrap>
                {/* 리뷰 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 리뷰 제목 */}
                  <Link to={`/course-detail/${item.id}`}>
                    <S.HistoryTitle>
                      [
                      <span>
                        {/* {item.title} */}
                        리뷰를 남긴 코스 제목
                      </span>
                      ]에 남긴 리뷰
                    </S.HistoryTitle>
                  </Link>
                </S.HistoryTitleWrap>
                {/* 리뷰 내용 */}
                <S.HistoryContent>{item.courseReviewContent}</S.HistoryContent>
              </S.HistoryListItem>
            ))}
      </S.HistoryList>
    </UtilDiv>
  );
}

export default HistoriesForm;

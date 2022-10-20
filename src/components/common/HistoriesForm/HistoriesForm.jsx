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
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function HistoriesForm({ isReportHistoryPage }) {
  /* ReportForm 및 ReportReply Open 여부 관련 state */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );
  const [isReportReplyCanOpen, setIsReportReplyCanOpen] = useState(false);
  const [isHitoriesChanged, setIsHitoriesChanged] = useState(false);
  /* 신고 상세 조회 폼에 넘겨줄 reportDetail state */
  const [reportDetail, setReportDetail] = useState(null);
  const [reports, setReports] = useState([]);
  const [reviews, setReviews] = useState([]);

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
  /* 접속한 페이지가 신고 내역 페이지라면 나의 신고 내역을 불러오고 아니라면 내가 남긴 리뷰를 불러오는 함수 */
  const getReports = () => {
    const getReportsUrl = `${process.env.REACT_APP_BOARD_IP}/v1/boards?filter=auth`;
    const getReportsHeaders = {
      headers: {
        Authorization: 2, // 로그인한 사용자의 식별자
      },
    };

    axios
      .get(getReportsUrl, getReportsHeaders)
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        new Error(error);
      });
  };

  const getReviews = () => {
    const getReviewsUrl = `${process.env.REACT_APP_COMMENT_IP}/v1/comments?filter=auth&type=review`;
    const getReviewsHeaders = {
      headers: {
        Authorization: 2, // 로그인한 사용자의 식별자
      },
    };

    axios
      .get(getReviewsUrl, getReviewsHeaders)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        new Error(error);
      });
  };
  useEffect(() => {
    if (!isReportHistoryPage) {
      getReports();
    } else {
      getReviews();
    }
  }, [isReportHistoryPage, isHitoriesChanged]);

  /* 삭제 버튼 클릭 시 해당 신고 내역을 삭제하는 함수 */
  const deleteReportHistory = (id) => {
    const deleteReportHistoryUrl = `${process.env.REACT_APP_BOARD_IP}/v1/boards/${id}`;

    axios
      .delete(deleteReportHistoryUrl)
      .then((response) => {
        console.log(response);
        setIsHitoriesChanged(!isHitoriesChanged);
      })
      .catch((error) => console.log(error));
  };

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
          onClick={onClickOpenReportDetail}
          setIsReportFormOpened={setIsReportFormOpened}
          isReportFormOpened={isReportFormOpened}
          isReportHistoryPage={isReportHistoryPage}
          item={reportDetail}
        />
        {isReportHistoryPage
          ? reports &&
            reports.map((report) => (
              // 신고 내역 아이템
              <S.HistoryListItem key={report.id}>
                {/* 신고 날짜 */}
                <S.HistoryDateAndRateWrap>
                  <S.HistoryDate>{report.createdAt}</S.HistoryDate>
                </S.HistoryDateAndRateWrap>
                {/* 신고 분류 및 수정, 삭제 버튼 */}
                <S.ReportHistoryCategoryAndUtilButtonWrap>
                  <S.ReportHistoryCategory>
                    분류: {report.reportCategoryList[0].reportCategoryName}
                  </S.ReportHistoryCategory>
                  <S.ReportHistoryUtilButtonWrap>
                    <AiIcons.AiOutlineEdit />
                    <BsIcons.BsTrash
                      onClick={() => deleteReportHistory(report.id)}
                    />
                  </S.ReportHistoryUtilButtonWrap>
                </S.ReportHistoryCategoryAndUtilButtonWrap>
                {/* 신고 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 신고 제목 */}
                  <S.HistoryTitle
                    onClick={(e) => onClickOpenReportDetail(e, report)}
                  >
                    <span>{report.reportTitle}</span>
                  </S.HistoryTitle>
                  {/* 답변 여부 버튼 */}
                  <Button
                    type="button"
                    width={'80px'}
                    height={'30px'}
                    fontSize={'12px'}
                    bgColor={report.isReplied ? color.darkGreen : color.darkRed}
                    hoveredBgColor={report.isReplied && color.lightGreen}
                    onClick={() => onClickOpenReportReply(report.isReplied)}
                  >
                    {report.isReplied ? '답변 완료' : '답변 미완료'}
                  </Button>
                </S.HistoryTitleWrap>
                {/* 신고 내용 */}
                <S.HistoryContent>{report.reportContent}</S.HistoryContent>
              </S.HistoryListItem>
            ))
          : reviews &&
            reviews.map((review) => (
              // 리뷰 조회 아이템
              <S.HistoryListItem key={review.id}>
                {/* 리뷰 날짜 */}
                <S.HistoryDateAndRateWrap>
                  <span>{review.createdAt}</span>
                  <span>⭐ {review.rate}</span>
                </S.HistoryDateAndRateWrap>
                {/* 리뷰 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 리뷰 제목 */}
                  <Link to={`/course-detail/${review.id}`}>
                    <S.HistoryTitle>
                      [
                      <span>
                        {/* {review.title} */}
                        리뷰를 남긴 코스 제목
                      </span>
                      ]에 남긴 리뷰
                    </S.HistoryTitle>
                  </Link>
                </S.HistoryTitleWrap>
                {/* 리뷰 내용 */}
                <S.HistoryContent>
                  {review.courseReviewContent}
                </S.HistoryContent>
              </S.HistoryListItem>
            ))}
      </S.HistoryList>
    </UtilDiv>
  );
}

export default HistoriesForm;

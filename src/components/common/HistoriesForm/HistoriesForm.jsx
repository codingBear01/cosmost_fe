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
/* APIs */
import { getMyReports, getMyReviews } from '../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../style';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

function HistoriesForm({ isReportHistoryPage }) {
  /* States */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );
  const [isHistoriesChanged, setIsHistoriesChanged] = useState(false);
  const [openingReportFormType, setOpeningReportFormType] = useState(null);
  const [report, setReport] = useState(null);
  const [reports, setReports] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [warningDeleteIconIndex, setWarningDeleteIconIndex] = useState(null);

  /* Variables */
  const token = localStorage.getItem('token');

  /* Handlers */
  /* 신고 상세 조회 폼의 Open 여부를 조작하는 핸들러. 클릭 시 폼 Open 여부를 반대로 변경하고, 신고 데이터를 폼으로 props 전달하며 formRef.current에 클릭된 신고를 할당한다. */
  const onClickOpenReportForm = (e, item, type) => {
    setIsReportFormOpened(!isReportFormOpened);
    setReport(item);
    setOpeningReportFormType(type);
    formRef.current = e.target;
  };

  const onClickDisplayWarningDelteIcon = (i) => {
    setWarningDeleteIconIndex(i);
  };

  /* 일정 시간 경과 후 index를 null로 만들어 삭제 확인 아이콘을 닫는 핸들러 */
  useEffect(() => {
    if (typeof warningDeleteIconIndex === 'number') {
      const timer = setTimeout(() => {
        setWarningDeleteIconIndex(null);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [warningDeleteIconIndex]);

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

  /* 페이지 종류에 따라 나의 신고 내역 또는 내가 작성한 리뷰 불러오는 hooks */
  useEffect(() => {
    if (isReportHistoryPage) {
      getMyReports(token, setReports);
    } else {
      getMyReviews(token, setReviews);
    }
  }, [isReportHistoryPage, isHistoriesChanged]);

  /* 삭제 버튼 클릭 시 해당 신고 내역을 삭제하는 함수 */
  const deleteReport = (id) => {
    // const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards/${id}`;
    const url = `${process.env.REACT_APP_API}/boards/${id}`;

    axios
      .delete(url)
      .then((response) => {
        setIsHistoriesChanged(!isHistoriesChanged);
        setWarningDeleteIconIndex(null);
      })
      .catch((error) => new Error(error));
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
          onClick={onClickOpenReportForm}
          setIsReportFormOpened={setIsReportFormOpened}
          isReportFormOpened={isReportFormOpened}
          type={openingReportFormType}
          report={report}
          isHistoriesChanged={isHistoriesChanged}
          setIsHistoriesChanged={setIsHistoriesChanged}
        />
        {isReportHistoryPage
          ? reports &&
            reports.map((report, i) => (
              // 신고 내역 아이템
              <S.HistoryListItem key={report.id}>
                {/* 신고 날짜 */}
                <S.HistoryDateAndRateWrap>
                  <S.HistoryDate>{report.createdAt}</S.HistoryDate>
                </S.HistoryDateAndRateWrap>
                {/* 신고 분류 및 수정, 삭제 버튼 */}
                <S.ReportHistoryCategoryAndUtilButtonWrap>
                  <S.ReportHistoryCategory>
                    분류:{' '}
                    {report.reportCategoryList.map((item) => (
                      <span key={item.id}>{item.reportCategoryName}</span>
                    ))}
                  </S.ReportHistoryCategory>
                  <S.ReportHistoryUtilButtonWrap>
                    <AiIcons.AiOutlineEdit
                      onClick={(e) =>
                        onClickOpenReportForm(e, report, 'update')
                      }
                    />
                    {warningDeleteIconIndex === i && (
                      <S.WarningDeleteIconWrap
                        onClick={() => deleteReport(report.id)}
                      >
                        <BiIcons.BiErrorAlt style={{ color: `${color.red}` }} />
                        <span>삭제하기</span>
                      </S.WarningDeleteIconWrap>
                    )}
                    {warningDeleteIconIndex !== i && (
                      <BsIcons.BsTrash
                        onClick={() => onClickDisplayWarningDelteIcon(i)}
                      />
                    )}
                  </S.ReportHistoryUtilButtonWrap>
                </S.ReportHistoryCategoryAndUtilButtonWrap>
                {/* 신고 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 신고 제목 */}
                  <S.HistoryTitle
                    onClick={(e) => onClickOpenReportForm(e, report, 'detail')}
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

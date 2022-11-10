/* libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button } from '../../..';
/* APIs */
import {
  deleteMyReport,
  fetchAnswerAboutMyReport,
  fetchSingleCourseView,
} from '../../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../../style';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';

const HistoryListItem = ({
  report,
  review,
  isReportHistoryPage,
  onClickOpenReportForm,
}) => {
  /* States */
  const [isDeleteButtonOpened, setIsDeleteButtonOpened] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerAboutReport, setAnswerAboutReport] = useState(null);
  const [course, setCourse] = useState(null);

  const token = localStorage.getItem('token');

  /* Hooks */
  /** 일정 시간 경과 후 삭제 버튼을 닫는 핸들러 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleteButtonOpened(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDeleteButtonOpened]);

  /* APIs */
  useEffect(() => {
    if (isReportHistoryPage) {
      fetchAnswerAboutMyReport(report, setAnswerAboutReport, setIsAnswered);
    } else {
      fetchSingleCourseView(review?.courseId, setCourse);
    }
  }, []);

  return (
    <>
      {isDisplayed && isReportHistoryPage ? (
        <S.StyledHistoryListItem>
          {/* 신고 날짜 */}
          <S.HistoryDateAndRateWrap>
            <S.HistoryDate>{report?.createdAt}</S.HistoryDate>
          </S.HistoryDateAndRateWrap>
          {/* 신고 분류 및 수정, 삭제 버튼 */}
          <S.ReportHistoryCategoryAndUtilButtonWrap>
            <S.ReportHistoryCategory>
              <span>
                분류: {report?.reportCategoryList[0]?.reportCategoryName}
              </span>
            </S.ReportHistoryCategory>
            <S.ReportHistoryUtilButtonWrap>
              <FiIcons.FiEdit
                onClick={(e) => onClickOpenReportForm(e, report, 'update')}
              />
              {!isDeleteButtonOpened && (
                <BsIcons.BsTrash
                  onClick={() => setIsDeleteButtonOpened(true)}
                />
              )}
              {isDeleteButtonOpened && (
                <S.WarningDeleteIconWrap
                  onClick={() => deleteMyReport(report, token, setIsDisplayed)}
                >
                  <BiIcons.BiErrorAlt style={{ color: `${color.red}` }} />
                </S.WarningDeleteIconWrap>
              )}
            </S.ReportHistoryUtilButtonWrap>
          </S.ReportHistoryCategoryAndUtilButtonWrap>
          {/* 신고 제목 및 답변 여부 버튼 */}
          <S.HistoryTitleWrap>
            {/* 신고 제목 */}
            <S.HistoryTitle
              onClick={(e) => onClickOpenReportForm(e, report, 'detail')}
            >
              <span>제목: {report.reportTitle}</span>
            </S.HistoryTitle>
            {/* 답변 여부 버튼 */}
            <Button
              type="button"
              width={'80px'}
              height={'30px'}
              fontSize={'12px'}
              bgColor={isAnswered ? color.darkGreen : color.darkRed}
              hoveredBgColor={isAnswered && color.lightGreen}
              onClick={(e) =>
                isAnswered &&
                onClickOpenReportForm(e, answerAboutReport, 'answer')
              }
            >
              {isAnswered ? '답변 완료' : '답변 미완료'}
            </Button>
          </S.HistoryTitleWrap>
          {/* 신고 내용 */}
          <S.HistoryContent>{report?.reportContent}</S.HistoryContent>
        </S.StyledHistoryListItem>
      ) : !isReportHistoryPage ? (
        <S.StyledHistoryListItem>
          {/* 리뷰 날짜 */}
          <S.HistoryDateAndRateWrap>
            <span>{review?.createdAt}</span>
            <span>⭐ {review?.rate}</span>
          </S.HistoryDateAndRateWrap>
          {/* 리뷰 제목 및 답변 여부 버튼 */}
          <S.HistoryTitleWrap>
            {/* 리뷰 제목 */}
            <Link to={`/course-detail/${review?.courseId}`}>
              <S.HistoryTitle>
                [<span>{course && course.courseTitle}</span>
                ]에 남긴 리뷰
              </S.HistoryTitle>
            </Link>
          </S.HistoryTitleWrap>
          {/* 리뷰 내용 */}
          <S.HistoryContent>{review?.courseReviewContent}</S.HistoryContent>
        </S.StyledHistoryListItem>
      ) : (
        <></>
      )}
    </>
  );
};

export default HistoryListItem;

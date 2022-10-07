/* libraries */
import React, { useState } from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { isReportFormOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
import { ReportForm } from '..';
import { Button, UtilDiv, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import {
  REPORT_HISTORIES as reports,
  REVIEW_HISTORIES as reviews,
} from '../../../store/temporaryArray';

function HistoriesForm({ isReportHistoryPage }) {
  /* ReportForm 및 ReportReply Open 여부 관련 state */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );
  const [isReportReplyCanOpen, setIsReportReplyCanOpen] = useState(false);
  /* ReportForm에 넘겨줄 reportDetail state */
  const [reportDetail, setReportDetail] = useState(null);

  /* 신고 상세 조회 폼의 Open 여부를 조작하는 핸들러 */
  const onClickOpenReportDetail = (item) => {
    setIsReportFormOpened(!isReportFormOpened);
    setReportDetail(item);
  };

  const onClickOpenReportReply = (isReplied) => {
    if (isReplied) {
      setIsReportReplyCanOpen(!isReportReplyCanOpen);
    }
  };

  return (
    <UtilDiv padding={'5rem 12.9rem'}>
      {/* 페이지 이름 */}
      <UtilTitle>
        {isReportHistoryPage ? '신고내역' : '내가 남긴 리뷰'}
      </UtilTitle>
      {/* 신고내역 목록 */}
      <S.HistoryList>
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
                <S.HistoryDateWrap
                  onClick={() => onClickOpenReportDetail(item)}
                >
                  {item.date}
                </S.HistoryDateWrap>
                {/* 신고 분류 */}
                <S.ReportHistoryCat>분류: {item.category}</S.ReportHistoryCat>
                {/* 신고 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 신고 제목 */}
                  <S.HistoryTitle onClick={() => onClickOpenReportDetail(item)}>
                    {item.title}
                  </S.HistoryTitle>
                  {/* 답변 여부 버튼 */}
                  <Button
                    type="button"
                    widht={'80px'}
                    height={'30px'}
                    fontSize={'12px'}
                    bgColor={item.isReplied ? color.darkGreen : color.darkRed}
                    onClick={() => onClickOpenReportReply(item.isReplied)}
                  >
                    {item.isReplied ? '답변 완료' : '답변 미완료'}
                  </Button>
                </S.HistoryTitleWrap>
                {/* 신고 내용 */}
                <S.HistoryContent onClick={() => onClickOpenReportDetail(item)}>
                  {item.content}
                </S.HistoryContent>
              </S.HistoryListItem>
            ))
          : reviews &&
            reviews.map((item) => (
              // 리뷰 조회 아이템
              <S.HistoryListItem key={item.id}>
                {/* 리뷰 날짜 */}
                <S.HistoryDateWrap>{item.date}</S.HistoryDateWrap>
                {/* 리뷰 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 리뷰 제목 */}
                  <S.HistoryTitle>
                    [<span>{item.title}</span>]에 남긴 리뷰
                  </S.HistoryTitle>
                </S.HistoryTitleWrap>
                {/* 리뷰 내용 */}
                <S.HistoryContent>{item.content}</S.HistoryContent>
              </S.HistoryListItem>
            ))}
      </S.HistoryList>
      {/* 신고 상세 내역 조회 모달 */}
    </UtilDiv>
  );
}

export default HistoriesForm;

/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { Button, UtilDiv, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import {
  REPORT_HISTORY_DATA_LIST as history,
  REVIEW_HISTORY_DATA_LIST as review,
} from '../../../data';

function HistoryForm({ isReport }) {
  const [isReportReplyOpened, setIsReportReplyOpened] = useState(false);

  const onClickOpenReportDetail = () => {
    console.log('신고상세');
  };

  const onClickOpenReportReply = (isReplied) => {
    if (isReplied) {
      setIsReportReplyOpened(!isReportReplyOpened);
      console.log('답변 조회');
    }
  };

  return (
    <UtilDiv pd={'5rem 12.9rem'}>
      {/* 페이지 이름 */}
      <UtilTitle>{isReport ? '신고내역' : '내가 남긴 리뷰'}</UtilTitle>
      {/* 신고내역 목록 */}
      <S.HistoryList>
        {isReport
          ? history &&
            history.map((item) => (
              // 신고 내역 아이템
              <S.HistoryListItem key={item.id}>
                {/* 신고 날짜 */}
                <S.HistoryDateWrap onClick={onClickOpenReportDetail}>
                  {item.date}
                </S.HistoryDateWrap>
                {/* 신고 제목 및 답변 여부 버튼 */}
                <S.HistoryTitleWrap>
                  {/* 신고 제목 */}
                  <S.HistoryTitle onClick={onClickOpenReportDetail}>
                    {item.title}
                  </S.HistoryTitle>
                  {/* 답변 여부 버튼 */}
                  <Button
                    type="button"
                    w={'80px'}
                    h={'30px'}
                    fs={'12px'}
                    bg_col={item.isReplied ? color.darkGreen : color.darkRed}
                    onClick={() => onClickOpenReportReply(item.isReplied)}
                  >
                    {item.isReplied ? '답변 완료' : '답변 미완료'}
                  </Button>
                </S.HistoryTitleWrap>
                {/* 신고 내용 */}
                <S.HistoryContent onClick={onClickOpenReportDetail}>
                  {item.content}
                </S.HistoryContent>
              </S.HistoryListItem>
            ))
          : review &&
            review.map((item) => (
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
    </UtilDiv>
  );
}

export default HistoryForm;

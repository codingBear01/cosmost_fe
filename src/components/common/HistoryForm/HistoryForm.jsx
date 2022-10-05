/* libraries */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, UtilDiv, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';
import { REPORT_HISTORY_DATA_LIST as history } from '../../../data';

function HistoryForm({ path }) {
  const [isReportDetailOpened, setIsReportDetailOpened] = useState(false);

  const onClickOpenReportDetail = () => {
    setIsReportDetailOpened(!isReportDetailOpened);
    console.log('ㅋㅋㅋㅋ');
  };

  if (path.includes('report')) {
    return (
      <UtilDiv pd={'10rem 12.9rem'}>
        {/* 페이지 이름 */}
        <UtilTitle>신고내역</UtilTitle>
        {/* 신고내역 목록 */}
        <S.ReportHistoryList>
          {history &&
            history.map((item) => (
              // 신고 내역 아이템
              <S.ReportHistoryListItem
                key={item.id}
                onClick={onClickOpenReportDetail}
              >
                {/* 신고 날짜 */}
                <S.ReportHistoryDateWrap>{item.date}</S.ReportHistoryDateWrap>
                {/* 신고 제목 및 답변 여부 버튼 */}
                <S.ReportHistoryTitleWrap>
                  {/* 신고 제목 */}
                  <S.ReportHistoryTitle>{item.title}</S.ReportHistoryTitle>
                  {/* 답변 여부 버튼 */}
                  <Button
                    type="button"
                    w={'80px'}
                    h={'30px'}
                    fs={'12px'}
                    bg_col={item.isReplied ? color.darkGreen : color.darkRed}
                  >
                    {item.isReplied ? '답변 완료' : '답변 미완료'}
                  </Button>
                </S.ReportHistoryTitleWrap>
                {/* 신고 내용 */}
                <S.ReportHistoryContent>{item.content}</S.ReportHistoryContent>
              </S.ReportHistoryListItem>
            ))}
        </S.ReportHistoryList>
      </UtilDiv>
    );
  } else if (path.includes('review')) {
    <h1 style={{ color: 'white' }}>리뷰 조회 ㅋ</h1>;
  }
}

export default HistoryForm;

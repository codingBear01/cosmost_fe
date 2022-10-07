/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { Button, Input, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

function ReportForm({
  onClick,
  setIsReportFormOpened,
  isReportFormOpened,
  isReportHistoryPage,
  item,
}) {
  const onClickReport = (e) => {
    e.preventDefault();
    alert('👮‍♂️신고를 해버렸읍니다!');
    setIsReportFormOpened(!isReportFormOpened);
  };

  return (
    <S.ReportFormBg isReportFormOpened={isReportFormOpened}>
      <S.ReportForm>
        <S.ReportFormTitleWrap>
          <UtilTitle>
            {isReportHistoryPage ? '신고 상세 조회' : '내가 남긴 리뷰'}
          </UtilTitle>
          <AiIcons.AiOutlineClose onClick={onClick} />
        </S.ReportFormTitleWrap>
        {isReportHistoryPage ? (
          <S.ReportHistoryCat>
            분류:
            {item?.category}
          </S.ReportHistoryCat>
        ) : (
          <S.ReportFormCats>
            <option value="default">신고 유형</option>
            <option value="user">유저</option>
            <option value="course">코스</option>
            <option value="review">리뷰</option>
          </S.ReportFormCats>
        )}
        {isReportHistoryPage ? (
          <S.ReportFormTitle>{item?.title}</S.ReportFormTitle>
        ) : (
          // 신고 제목
          <Input
            type="text"
            placeholder="제목"
            width={'45rem'}
            height={'4rem'}
            disabled
          />
        )}
        {/* 신고 내용 */}
        <S.ReportFormTextArea
          placeholder="신고 내용을 입력해주세요."
          disabled
          value={item?.content}
          maxLength={500}
        ></S.ReportFormTextArea>
        {/* 신고 버튼 */}
        {!isReportHistoryPage && (
          <S.ReportFormBtnWrap>
            <Button
              type="button"
              width={'8rem'}
              height={'3.5rem'}
              marign={'0 3rem'}
              color={color.black}
              bgColor={color.lightGrey}
              hoveredBgColor={color.grey}
              onClick={onClick}
            >
              취소
            </Button>
            <Button
              type="submit"
              width={'8rem'}
              height={'3.5rem'}
              margin={'0 3rem'}
              color={color.white}
              bgColor={color.darkBlue}
              hoveredBgColor={color.navy}
              onClick={(e) => onClickReport(e)}
            >
              신고
            </Button>
          </S.ReportFormBtnWrap>
        )}
      </S.ReportForm>
    </S.ReportFormBg>
  );
}

export default ReportForm;

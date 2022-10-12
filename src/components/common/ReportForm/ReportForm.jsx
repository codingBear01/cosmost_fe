/* libraries */
import React, { useEffect } from 'react';
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

  /* Hooks */
  /* 신고 모달 열렸을 때 바깥 영역 스크롤 방지하고 스크롤 Y좌표 맨 위로 설정하는 함수 */
  useEffect(() => {
    if (isReportFormOpened) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isReportFormOpened]);

  return (
    <S.ReportFormBg isReportFormOpened={isReportFormOpened}>
      <S.ReportForm>
        <S.ReportFormTitleWrap>
          <UtilTitle>
            {/* 신고 내역 페이지이면 신고 상세 조회, 신고하기 폼이면 내가 남긴 리뷰 */}
            {isReportHistoryPage ? '신고 상세 조회' : '신고하기'}
          </UtilTitle>
          <AiIcons.AiOutlineClose onClick={onClick} />
        </S.ReportFormTitleWrap>
        {/* 신고 내역 페이지면 해당 신고의 분류, 신고하기 폼이면 신고 유형 드랍다운 */}
        {isReportHistoryPage ? (
          <S.ReportHistoryCat>분류: {item?.category}</S.ReportHistoryCat>
        ) : (
          <S.ReportFormCats>
            <option value="default">신고 유형</option>
            <option value="user">유저</option>
            <option value="course">코스</option>
            <option value="review">리뷰</option>
          </S.ReportFormCats>
        )}
        {/* 신고 내역 페이지면 해당 신고의 제목, 신고하기 폼이면 신고 제목 입력 인풋 */}
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
          // 신고 내역 페이지면 입력 불가, 신고하기 폼이면 입력 가능
          disabled={isReportHistoryPage}
          value={item?.content}
          maxLength={500}
        ></S.ReportFormTextArea>
        {/* 신고 버튼 */}
        {/* 신고 내역 페이지면 안 보임, 신고하기 폼이면 보임 */}
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

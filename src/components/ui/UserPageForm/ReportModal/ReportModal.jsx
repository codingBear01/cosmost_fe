/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { Button, Input, UtilTitle } from '../../../';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function ReportModal({ onClickOpenReportModal, isReportModalOpened }) {
  const onClickReport = (e) => {
    e.preventDefault();
    alert('👮‍♂️신고를 해버렸읍니다!');
  };

  return (
    <S.ReportModalBg isReportModalOpened={isReportModalOpened}>
      <S.ReportModalForm>
        <UtilTitle>신고하기</UtilTitle>
        {/* 신고 유형 */}
        <S.ReportModalCats>
          <option value="default">신고 유형</option>
          <option value="user">유저</option>
          <option value="course">코스</option>
          <option value="review">리뷰</option>
        </S.ReportModalCats>
        {/* 신고 제목 */}
        <Input type="text" placeholder="제목" w={'45rem'} h={'4rem'} />
        {/* 신고 내용 */}
        <S.ReportModalTextArea placeholder="신고 내용을 입력해주세요."></S.ReportModalTextArea>
        {/* 신고 버튼 */}
        <S.ReportModalBtnWrap>
          <Button
            type="button"
            w={'8rem'}
            h={'3.5rem'}
            mr={'0 3rem'}
            col={color.black}
            bg_col={color.lightGrey}
            ho_bg_col={color.grey}
            onClick={onClickOpenReportModal}
          >
            취소
          </Button>
          <Button
            type="submit"
            w={'8rem'}
            h={'3.5rem'}
            mr={'0 3rem'}
            col={color.white}
            bg_col={color.darkBlue}
            ho_bg_col={color.navy}
            onClick={(e) => onClickReport(e)}
          >
            신고
          </Button>
        </S.ReportModalBtnWrap>
      </S.ReportModalForm>
    </S.ReportModalBg>
  );
}

export default ReportModal;

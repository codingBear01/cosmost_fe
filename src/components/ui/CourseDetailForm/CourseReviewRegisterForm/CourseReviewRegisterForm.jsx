/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { Button } from '../../../';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

function CourseReviewRegisterForm() {
  return (
    <S.StyledCourseReviewRegisterForm>
      <S.ReviewRegisterTitleAndRateWrap>
        <S.ReviewRegisterTitle>리뷰 작성</S.ReviewRegisterTitle>
        {/* 처음에 빈 별 5개 주어지고 별 클릭하면 해당되는 평점 수만큼을 노란 별 개수로 바꾸어 보여주기 */}
        <S.ReviewRegisterRate>
          <AiIcons.AiFillStar style={{ color: 'yellow' }} />
          <AiIcons.AiFillStar style={{ color: 'yellow' }} />
          <AiIcons.AiFillStar style={{ color: 'yellow' }} />
          <AiIcons.AiFillStar style={{ color: 'yellow' }} />
          <AiIcons.AiOutlineStar />
        </S.ReviewRegisterRate>
      </S.ReviewRegisterTitleAndRateWrap>
      <S.ReviewRegisterTextarea
        placeholder="리뷰를 입력하세요."
        maxLength={500}
      ></S.ReviewRegisterTextarea>
      <Button
        type={'submit'}
        width={'10rem'}
        height={'4rem'}
        fontSize={fs.s}
        color={color.white}
        bgColor={color.darkBlue}
        hoveredBgColor={color.navy}
      >
        리뷰 남기기
      </Button>
    </S.StyledCourseReviewRegisterForm>
  );
}

export default CourseReviewRegisterForm;

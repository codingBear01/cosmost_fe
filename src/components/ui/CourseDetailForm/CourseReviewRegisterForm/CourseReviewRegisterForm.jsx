/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { Button } from '../../../';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

/* CONSTANTS */
const REVIEW_RATE_INDEXES = [0, 1, 2, 3, 4];

function CourseReviewRegisterForm() {
  /* 평점에 쓰이는 states */
  const [isYellowStar, setIsYellowStar] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [reviewRate, setReviewRate] = useState(1);

  /* 평점을 설정하는 핸들러. 전달한 index 이하의 isYellowStar를 true로 만들고, index + 1을 평점으로 할당한다. */
  const onClickSetReviewRate = (index) => {
    let isYellowStarStates = [...isYellowStar];
    for (let i = 0; i < REVIEW_RATE_INDEXES.length; i++) {
      isYellowStarStates[i] = i <= index ? true : false;
    }
    setIsYellowStar(isYellowStarStates);
    setReviewRate(index + 1);
  };

  return (
    <S.StyledCourseReviewRegisterForm>
      <S.ReviewRegisterTitleAndRateWrap>
        <S.ReviewRegisterTitle>리뷰 작성</S.ReviewRegisterTitle>
        {/* item의 boolean 여부에 따라 노랑, 하양 별이 다르게 rendering됨 */}
        <S.ReviewRegisterRate>
          {REVIEW_RATE_INDEXES.map((item) => (
            <div key={item}>
              {isYellowStar[item] ? (
                <AiIcons.AiFillStar
                  style={{ color: 'yellow' }}
                  onClick={() => onClickSetReviewRate(item)}
                />
              ) : (
                <AiIcons.AiOutlineStar
                  onClick={() => onClickSetReviewRate(item)}
                />
              )}
            </div>
          ))}
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

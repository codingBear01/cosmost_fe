/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from '../..';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CourseDetailForm() {
  return (
    <>
      <S.SliderArea>
        <S.SliderWrap {...sliderSettings}>
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
            alt="pikachu"
          />
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
            alt="pikachu"
          />
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
            alt="pikachu"
          />
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
            alt="pikachu"
          />
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
            alt="pikachu"
          />
          <img
            src="https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800"
            alt="pikachu"
          />
        </S.SliderWrap>
      </S.SliderArea>
      <UtilDiv width={'76.8rem'} padding={'7rem 0'} margin={'0 auto'}>
        <h1 style={{ color: 'white' }}>코스 상세 조회 페이지</h1>
      </UtilDiv>
    </>
  );
}

export default CourseDetailForm;

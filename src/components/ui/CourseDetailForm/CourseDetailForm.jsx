/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { CourseImageCarousel } from '.';
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
      {/* 코스 이미지 carousel */}
      <CourseImageCarousel />
      {/* 본문 */}
      <UtilDiv width={'76.8rem'} padding={'7rem 0'} margin={'0 auto'}>
        <h1 style={{ color: 'white' }}>코스 상세 조회 페이지</h1>
      </UtilDiv>
    </>
  );
}

export default CourseDetailForm;

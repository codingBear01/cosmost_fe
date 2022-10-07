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

function CourseDetailForm() {
  return (
    <>
      {/* 코스 이미지 5장용 carousel */}
      <CourseImageCarousel />
      {/* 본문 */}
      <UtilDiv width={'76.8rem'} padding={'7rem 0'} margin={'0 auto'}>
        <h1 style={{ color: 'white' }}>코스 상세 조회 페이지</h1>
        <div>
          <div>
            <span>코스 제목</span>
            <span>코스 별점</span>
          </div>
          <div>
            <span>날짜</span>
            <span>more</span>
          </div>
        </div>
      </UtilDiv>
    </>
  );
}

export default CourseDetailForm;

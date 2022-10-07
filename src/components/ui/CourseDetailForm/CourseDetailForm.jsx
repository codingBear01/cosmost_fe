/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { CourseImageCarousel, CourseTitleArea } from '.';
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COURSE_DETAIL as courseData } from '../../../store';

function CourseDetailForm() {
  return (
    <>
      {/* 코스 이미지 carousel */}
      <CourseImageCarousel courseData={courseData} />
      {/* 본문 */}
      <UtilDiv width={'76.8rem'} padding={'7rem 0'} margin={'0 auto'}>
        <CourseTitleArea courseData={courseData} />
      </UtilDiv>
    </>
  );
}

export default CourseDetailForm;

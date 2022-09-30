/* hooks */
import React, { useState, useEffect } from 'react';
/* components */
import * as S from './styled';
import {
  CourseImg,
  CourseTitle,
  EachCourseBox,
  EachCourseWrap,
} from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs, COLOR_LIST as color } from '../../../../style';

function TheMostGuCourse({ item }) {
  const [courseCnt, setCourseCnt] = useState('');

  const changeItemCount = () => {
    if (item.count > 1000) {
      const cnt = (item.count / 1000).toFixed(1);
      setCourseCnt(`${cnt}K`);
    } else {
      setCourseCnt(item.count);
    }
  };

  useEffect(() => {
    changeItemCount();
  }, []);

  return (
    <EachCourseWrap>
      <CourseImg
        src={item.imgUrl}
        alt={item.title}
        width={'27.5rem'}
        height={'20rem'}
      ></CourseImg>
      <EachCourseBox>
        <CourseTitle
          fontSize={fs.l}
          sectionName={'지역구'}
          overflow="hidden"
          textOverflow={'ellipsis'}
          whiteSpace={'nowrap'}
        >
          {item.title}
        </CourseTitle>
        <S.CourseCount>
          <span>📝</span>
          {/* <span>{item.count}</span> */}
          <span>{courseCnt}건</span>
        </S.CourseCount>
      </EachCourseBox>
    </EachCourseWrap>
  );
}

export default TheMostGuCourse;

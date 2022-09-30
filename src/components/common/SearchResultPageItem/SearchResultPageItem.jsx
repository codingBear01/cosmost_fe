import React from 'react';
/* components */
import * as S from './styled';
import {
  CategoriesWrap,
  CourseImg,
  CoursesWrap,
  CourseTitle,
  EachCourseWrap,
  EachCourseBox,
  HashTag,
} from '../../common';
/* static data */
import {
  COLOR_LIST as color,
  FONT_SIZE_LIST as fs,
  BORDER_RADIUS_LIST as br,
} from '../../../style';

function SearchResultPageItem({ item }) {
  return (
    <EachCourseWrap height={'42rem'} box_shadow={`0 0 2px 1px ${color.grey}`}>
      {/* 코스 이미지 */}
      <CourseImg
        src={item.imgUrl}
        alt={item.title}
        width={'27.5rem'}
        height={'20rem'}
        border_radius={`${br.default} ${br.default} 0 0`}
      ></CourseImg>
      {/* 코스 정보 박스 */}
      <EachCourseBox column={'column'} height={'50%'} padding={'0 1rem'}>
        {/* 코스 제목 */}
        <CourseTitle
          rate={item.rate}
          fontSize={fs.l}
          overflow="hidden"
          textOverflow={'ellipsis'}
          whiteSpace={'nowrap'}
        >
          {item.title}
        </CourseTitle>
        {/* 카테고리 */}
        <CategoriesWrap
          display={'flex'}
          fd={'column'}
          categories={item.categories}
        ></CategoriesWrap>
        {/* 해시태그 */}
        <div>
          {item.hashTags.map((tag, i) => (
            <HashTag key={tag.id} fontSize={fs.xs}>
              {tag.hashTagName}
            </HashTag>
          ))}
        </div>
        {/* 코스 순서 정보 */}
        <CoursesWrap courses={item.courses}></CoursesWrap>
      </EachCourseBox>
    </EachCourseWrap>
  );
}

export default SearchResultPageItem;

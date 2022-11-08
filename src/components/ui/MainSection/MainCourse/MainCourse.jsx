/* libraries */
import React from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { searchingTypeAtom } from '../../../../store';
/* components */
import * as S from './styled';
/* icons */
import * as FaIcons from 'react-icons/fa';

function MainCourse({ item }) {
  const [, setSearchingType] = useRecoilState(searchingTypeAtom);
  return (
    <S.StyledMainCourse alignSelf={item.alignSelf}>
      <S.CourseTextWrap>
        <S.CourseTitle>{item.title}</S.CourseTitle>
        <S.CoureseLink
          to={item.path}
          onClick={() => setSearchingType(item.type)}
        >
          더 둘러보기
          <FaIcons.FaChevronRight />
        </S.CoureseLink>
      </S.CourseTextWrap>
      <S.CourseIcon>{item.icon}</S.CourseIcon>
    </S.StyledMainCourse>
  );
}

export default MainCourse;

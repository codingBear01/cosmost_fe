/* hooks */
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { CourseImg, CourseTitle, HashTag } from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs, COLOR_LIST as color } from '../../../../style';

function PopularCourse() {
  return (
    <Link to="/course/detail" style={{ color: `${color.black}` }}>
      <S.PopularCourseWrap>
        <CourseImg width={'100%'} height={'65%'}></CourseImg>
        <S.PoplularCourseBox>
          <CourseTitle fontSize={fs.l}>코스 제목</CourseTitle>
          <div>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그 해시태그 해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
          </div>
        </S.PoplularCourseBox>
      </S.PopularCourseWrap>
    </Link>
  );
}

export default PopularCourse;

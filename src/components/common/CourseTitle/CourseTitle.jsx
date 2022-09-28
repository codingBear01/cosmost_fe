/* components */
import * as S from './styled';

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 제목 */
function CourseTitle({ fontSize, children }) {
  return (
    <S.StyledCourseTitle fontSize={fontSize}>{children}</S.StyledCourseTitle>
  );
}

export default CourseTitle;

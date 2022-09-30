/* components */
import * as S from './styled';

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 제목 */
function CourseTitle({ fontSize, children, sectionName }) {
  return (
    <S.CourseTitleWrap>
      <S.StyledCourseTitle fontSize={fontSize}>{children}</S.StyledCourseTitle>
      {sectionName !== '지역구' && (
        <S.CourseTotalRate height={fontSize}>⭐ 4.5</S.CourseTotalRate>
      )}
    </S.CourseTitleWrap>
  );
}

export default CourseTitle;

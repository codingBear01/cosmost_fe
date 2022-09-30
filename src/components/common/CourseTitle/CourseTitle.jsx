/* components */
import * as S from './styled';

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 제목 */
function CourseTitle({ fontSize, children, rate, sectionName }) {
  return (
    <S.CourseTitleWrap>
      <S.StyledCourseTitle fontSize={fontSize}>
        {children.length > 14
          ? `${children.substring(0, 13)}...`
          : `${children}`}
      </S.StyledCourseTitle>
      {sectionName !== '지역구' && (
        <S.CourseTotalRate height={fontSize}>⭐{rate}</S.CourseTotalRate>
      )}
    </S.CourseTitleWrap>
  );
}

export default CourseTitle;

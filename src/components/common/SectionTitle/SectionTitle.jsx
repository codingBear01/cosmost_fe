/* hooks */
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { MoreCourseBtn } from '..';

// 각 페이지에서 쓰이는 section의 제목
function SectionTitle({ children }) {
  return (
    <S.PopularTitleWrap>
      <S.PopularTitle>{children}</S.PopularTitle>
      <Link to="/course/detail">
        <MoreCourseBtn></MoreCourseBtn>
      </Link>
    </S.PopularTitleWrap>
  );
}

export default SectionTitle;

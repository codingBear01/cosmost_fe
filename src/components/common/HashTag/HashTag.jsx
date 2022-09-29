/* components */
import { Link } from 'react-router-dom';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 해시태그 */
function HashTag({ fontSize, children }) {
  const navigate = useNavigate();
  const redirectToResultPage = () => {
    navigate('/course/result');
  };
  return (
    <S.StyledHashtag fontSize={fontSize} onClick={redirectToResultPage}>
      {children}
    </S.StyledHashtag>
  );
}

export default HashTag;

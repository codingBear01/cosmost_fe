/* components */
import * as S from './styled';

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 해시태그 */
function HashTag({ fs, children }) {
  return <S.StyledHashtag fs={fs}>{children}</S.StyledHashtag>;
}

export default HashTag;

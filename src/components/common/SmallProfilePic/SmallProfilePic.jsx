/* components */
import * as S from './styled';

// 30 * 30 사이즈의 작은 프로필 이미지
function SmallProfilePic({ src, alt }) {
  return <S.StyledSmallProfilePic src={src} alt={alt} />;
}

export default SmallProfilePic;

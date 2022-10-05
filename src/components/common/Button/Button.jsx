/* components */
import * as S from './styled';

function Button({
  type,
  w,
  h,
  mr,
  fs,
  col,
  bg_col,
  hov_col,
  ho_bg_col,
  children,
  onClick,
}) {
  return (
    <S.StyledButton
      type={type}
      w={w}
      h={h}
      mr={mr}
      fs={fs}
      col={col}
      bg_col={bg_col}
      hov_col={hov_col}
      ho_bg_col={ho_bg_col}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

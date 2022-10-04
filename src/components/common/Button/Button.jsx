/* components */
import * as S from './styled';

function Button({
  type,
  w,
  h,
  mr,
  fs,
  bg_color,
  ho_color,
  col,
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
      bg_color={bg_color}
      ho_color={ho_color}
      col={col}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

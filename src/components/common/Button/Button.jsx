/* components */
import * as S from './styled';

function Button({
  type,
  alignSelf,
  width,
  height,
  margin,
  fontSize,
  color,
  bgColor,
  hoveredBgColor,
  children,
  onClick,
}) {
  return (
    <S.StyledButton
      type={type}
      alignSelf={alignSelf}
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      hoveredBgColor={hoveredBgColor}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

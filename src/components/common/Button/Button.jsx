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
  value,
  disabled,
  onClick,
  children,
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
      value={value}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

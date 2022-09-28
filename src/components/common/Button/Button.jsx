/* components */
import * as S from './styled';

function Button({ width, height, fontSize, bgColor, children }) {
  return (
    <S.StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      bgColor={bgColor}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

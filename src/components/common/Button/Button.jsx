/* components */
import * as S from "./styled";

function Button({ width, height, fontSize, bgColor, children, onClick }) {
  return (
    <S.StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      bgColor={bgColor}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

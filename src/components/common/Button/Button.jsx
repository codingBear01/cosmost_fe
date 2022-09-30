/* components */
import * as S from "./styled";

function Button({ width, height, fontSize, bgColor, children, onClick }) {
  return (
    <S.StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      bgColor={bgColor || "#666AD1"}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

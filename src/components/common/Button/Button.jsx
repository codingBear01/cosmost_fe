/* components */
import * as S from "./styled";

function Button({ width, height, fontSize, children, onClick }) {
  return (
    <S.StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </S.StyledButton>
  );
}

export default Button;

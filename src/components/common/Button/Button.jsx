import * as S from './styled';

function Button({ width, height, fontSize, children }) {
  return (
    <S.StyledButton width={width} height={height} fontSize={fontSize}>
      {children}
    </S.StyledButton>
  );
}

export default Button;

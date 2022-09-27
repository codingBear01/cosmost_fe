import * as S from './styled';

function Section({ height, backgroundColor, children }) {
  return (
    <S.StyledSection height={height} backgroundColor={backgroundColor}>
      {children}
    </S.StyledSection>
  );
}

export default Section;

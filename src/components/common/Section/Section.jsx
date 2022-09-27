import * as S from './styled';

function Section({ height, backgroundColor, paddingTop, children }) {
  return (
    <S.StyledSection
      height={height}
      backgroundColor={backgroundColor}
      paddingTop={paddingTop}
    >
      {children}
    </S.StyledSection>
  );
}

export default Section;

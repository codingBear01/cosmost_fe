import * as S from './styled';

// 각 페이지에서 활용하는 section
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

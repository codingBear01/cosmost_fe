/* components */
import * as S from './styled';

// 각 페이지에서 활용하는 section
function Section({ height, pd_b, backgroundColor, paddingTop, children }) {
  return (
    <S.StyledSection
      height={height}
      pd_b={pd_b}
      backgroundColor={backgroundColor}
      paddingTop={paddingTop}
    >
      {children}
    </S.StyledSection>
  );
}

export default Section;

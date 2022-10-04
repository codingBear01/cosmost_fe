/* components */
import * as S from './styled';

// 각 페이지에서 활용하는 section
function Section({ height, pd_b, bg_color, paddingTop, children }) {
  return (
    <S.StyledSection
      height={height}
      pd_b={pd_b}
      bg_color={bg_color}
      paddingTop={paddingTop}
    >
      {children}
    </S.StyledSection>
  );
}

export default Section;

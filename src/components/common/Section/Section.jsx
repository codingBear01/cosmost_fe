/* components */
import * as S from './styled';

// 각 페이지에서 활용하는 section
function Section({ height, paddingBottom, bgColor, paddingTop, children }) {
  return (
    <S.StyledSection
      height={height}
      paddingBottom={paddingBottom}
      bgColor={bgColor}
      paddingTop={paddingTop}
    >
      {children}
    </S.StyledSection>
  );
}

export default Section;

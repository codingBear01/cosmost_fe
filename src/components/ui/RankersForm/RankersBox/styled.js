/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const StyledRankersBox = styled.div`
  width: 30rem;
  padding: 2rem;
  box-shadow: ${({ i }) => i !== 0 && `0 0 2px 2px ${color.grey}`};
  border-radius: ${br.default};

  ${media.mobile} {
    width: 65rem;
    margin-bottom: ${({ i }) => i !== 0 && `${gap.xl}`};
    padding: ${({ i }) => i === 0 && '0 2rem'};
  }
`;

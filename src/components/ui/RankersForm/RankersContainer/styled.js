/* libraries */
import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  BREAK_POINTS as media,
} from '../../../../style';

export const StyledRankersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65rem;
  margin: 4rem 0;
  padding: 1rem;
  box-shadow: ${({ i }) => i === 0 && `0 0 2px 2px ${color.grey}`};
  border-radius: ${br.default};

  ${media.mobile} {
    align-items: center;
    flex-direction: column;
  }
`;

export const RankerTypeText = styled.span`
  font-size: ${fs.xl};
  font-weight: 600;
`;

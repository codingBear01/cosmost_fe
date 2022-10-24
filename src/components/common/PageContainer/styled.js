/* libraries */
import styled from 'styled-components';
/* static data */
import { COLOR_LIST as color } from '../../../style';

export const StyledUtilPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 36rem;
  height: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  color: ${color.white};

  svg {
    font-size: 2.5rem;
    align-self: start;
    cursor: pointer;
  }
`;

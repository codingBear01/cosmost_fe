/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';

export const LoadingFormOverlay = styled.div`
  position: fixed;
  z-index: 201;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    color: white;
  }
`;

/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const OrderingModalOverlay = styled.div`
  visibility: ${({ isOrderingModalOpened }) =>
    isOrderingModalOpened ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.48);
  transition: 0.25s;
  transform: ${({ isOrderingModalOpened }) =>
    isOrderingModalOpened ? 'translateY(0)' : 'translateY(100%)'};
`;

export const StyledOrderingModal = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 30%;
  background-color: ${color.white};
  border-radius: 1.8rem 1.8rem 0 0;
`;

export const OrderingModalHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;

  span {
    font-size: ${fs.xl};
    font-weight: 600;
  }
`;

export const OrderingModalCloseButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 3rem;
`;

export const OrderingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 2rem;
`;

export const OrderingItem = styled.li`
  width: 50%;
  padding: 1rem 2rem;
  font-size: ${fs.xl};
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: ${color.lightGrey};
  }
`;

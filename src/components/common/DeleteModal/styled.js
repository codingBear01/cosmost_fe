import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const DeleteModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.48);
  transition: 0.25s;
`;

export const DeleteModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30rem;
  height: 12rem;
  background-color: ${color.white};
  border-radius: 1.8rem;
`;

export const DeleteModalTitle = styled.span`
  font-size: ${fs.xl} !important;
  font-weight: 600;
  color: ${color.black};
`;

export const DeleteModalButtonWrap = styled.div`
  margin-top: 2rem;
`;

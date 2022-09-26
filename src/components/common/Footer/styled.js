import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const Footer = styled.footer`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  width: 100%;
  height: 20rem;
  margin-top: 5rem;
  background-color: ${color.darkBlue};

  svg {
    font-size: 10rem;
    color: ${color.white};
  }
`;

export const FooterInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40rem;

  span {
    margin: ${gap.s} 0 0 5rem;
    font-size: ${fs.l};
    font-weight: 600;
    color: ${color.white};
  }

  span:last-child {
    width: 100%;
    margin-top: ${gap.xl};
    font-size: ${fs.m};
    text-align: right;
  }
`;

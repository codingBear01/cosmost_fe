import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  margin-top: 5rem;
  background-color: ${color.darkBlue};

  svg {
    font-size: 9rem;
    color: ${color.white};
  }
`;

export const FooterInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 40rem;

  a {
    margin-left: 5rem;
    padding: ${gap.xs};
    font-size: ${fs.m};
    font-weight: 600;
    color: ${color.white};
    transition: all 0.15s ease-in;

    &:hover {
      border-radius: ${br.default};
      background-color: ${color.lightBlue};
    }
  }

  span {
    width: 100%;
    margin: ${gap.s} 0 0 5rem;
    font-size: ${fs.m};
    font-weight: 600;
    color: ${color.white};
    text-align: right;
  }
`;

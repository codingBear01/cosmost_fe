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
  height: 7rem;
  background-color: ${color.darkBlue};

  svg {
    margin-right: ${gap.l};
    font-size: 4rem;
    color: ${color.white};
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40rem;

  div {
    display: flex;
    align-items: center;
  }

  div:first-child {
    flex-direction: column;
  }

  a {
    padding: ${gap.xs};
    font-size: ${fs.s};
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
    font-size: ${fs.m};
    font-weight: 600;
    color: ${color.white};
  }
`;

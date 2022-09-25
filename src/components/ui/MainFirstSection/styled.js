import styled from 'styled-components';
import { Input } from '../../';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const FirstSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 86.8rem;
`;

export const FirstSectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15rem;
  width: 62.5%;
`;

const StyledFirstSectionTitle = styled.span`
  font-size: 4.5rem;
  font-weight: 600;
  color: ${color.white};
  text-align: center;
`;

export const FirstSectionTitle = ({ title }) => (
  <StyledFirstSectionTitle>{title}</StyledFirstSectionTitle>
);

export const MainSearchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

export const SearchInput = styled(Input)`
  margin: 1rem;

  &:focus {
    outline: none;
  }
`;

export const SliderWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 62.5%;
  margin-bottom: ${gap.s};
  gap: 3rem;

  div {
    height: 30rem;
    border-radius: ${br.default};
    background-color: ${color.grey};
    color: ${color.white};
  }
`;

import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const FirstSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 868px;
`;

export const FirstSectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  width: 62.5%;
`;

const StyledFirstSectionTitle = styled.span`
  font-size: 50px;
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
  margin: 50px 0;
`;

export const MainSearchBar = styled.input.attrs({ types: 'text' })`
  width: 420px;
  height: 50px;
  margin-right: ${gap.xl};
  padding-left: ${gap.s};
  border-radius: ${br.default};
  font-size: ${fs.xl};

  &:focus {
    outline: none;
  }
`;

export const SliderWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 62.5%;
  margin-bottom: ${gap.s};

  div {
    margin: 0 ${gap.m};
    height: 300px;
    border-radius: ${br.default};
    background-color: ${color.grey};
    color: ${color.white};
  }
`;

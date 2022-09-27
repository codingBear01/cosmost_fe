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
  width: 100%;
  height: 100%;
`;

export const FirstSectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  margin-top: 15rem;
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
  margin: 3rem 0;
`;

export const SearchInput = styled(Input)`
  margin: 1rem;

  &:focus {
    outline: none;
  }
`;

export const MainHashTag = styled.span`
  padding: ${gap.xs};
  border-radius: ${br.default};
  font-size: ${fs.xl};
  color: ${color.white};
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${color.blue};
  }
`;

export const MainRankingBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 21.5rem;
  height: 5rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 0.1rem solid ${color.white};
  border-bottom: 0.1rem solid ${color.white};
  font-size: 1.6rem;
  color: ${color.white};
  gap: 2.5rem;
  // overflow: hidden;

  li {
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
  }
`;

export const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${gap.l};
  gap: 3rem;

  div {
    width: 120rem;
    height: 30rem;
    border-radius: ${br.default};
    // background-color: ${color.grey};
    color: ${color.white};
  }

  ${media.tablet} {
    width: 90rem;
  }

  ${media.mobile} {
    width: 60rem;
  }
`;

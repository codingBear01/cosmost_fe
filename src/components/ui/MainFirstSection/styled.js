/* libraries */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
/* components */
import { Input } from '../../';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
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
  margin-top: 6rem;
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
  overflow: hidden;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    transition: 0.2s;
  }
`;

export const SliderWrap = styled.div`
  display: block;
  width: 120rem;
  margin-bottom: 5rem;

  ${media.mobile} {
    width: 100%;
    hight: 30rem;
  }
`;

export const StyledSlider = styled(Slider)`
  height: 35rem;

  // 슬라이더 버튼
  .slick-prev {
    top: 16rem;
    left: -0.05rem;
    z-index: 1;
  }
  .slick-next {
    top: 16rem;
    right: 1.6rem;
  }
  .slick-prev,
  .slick-next {
    &:before {
      font-size: 5rem;
    }
  }

  // 슬라이더 img 상위 div들
  .slick-list {
    margin: 0 -2rem;
    ${media.mobile} {
      margin: 0;
    }
  }
  .slick-track {
    margin: 0 2rem;
    ${media.mobile} {
      margin: 0;
    }
  }

  //슬라이더 img
  .slick-slide img {
    width: 60rem !important;
    height: 35rem;
    border-radius: ${br.default};

    ${media.mobile} {
      width: 100% !important;
    }
  }

  // 슬라이더 dots
  .slick-dots {
    bottom: -4rem;
  }
  .slick-dots li button {
    width: 2rem;
    height: 2rem;
  }
  .slick-dots li.slick-active button:before {
    color: ${color.white};
  }
`;

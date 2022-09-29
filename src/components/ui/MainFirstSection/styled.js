/* libraries */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
/* components */
import { Input } from '../../';
import { StyledCourseImg } from './../../common/CourseImg/styled';
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
  margin-top: 4rem;
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
  margin: 2rem 0;
`;

export const SearchInput = styled(Input)`
  margin: 1rem;

  &:focus {
    outline: none;
  }
`;

export const MainHashTagWrap = styled.div`
  width: 100rem;
  text-align: center;

  ${media.mobile} {
    width: 55rem;
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
  margin-top: 3.5rem;
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
  @media (max-width: 1300px) {
    width: 100rem;
  }
  ${media.tablet} {
    width: 95rem;
  }
  ${media.mobile} {
    width: 90%;
  }
`;

export const StyledSlider = styled(Slider)`
  height: 40rem;
  ${media.mobile} {
    height: 35rem;
  }

  // 슬라이더 버튼
  .slick-prev {
    top: 18rem;
    left: -1.3rem;
    z-index: 1;
    ${media.mobile} {
      left: -1rem;
    }
  }
  .slick-next {
    top: 18rem;
    right: 1.5rem;
    ${media.tablet} {
      right: -1rem;
    }
    ${media.mobile} {
      right: 0.5rem;
    }
  }
  .slick-prev,
  .slick-next {
    &:before {
      font-size: 5rem;
    }
  }

  // 슬라이더 img 상위 div들
  // react-slick에서 img 간 margin 주려면 list에 음수, track에 양수 각각 줘야 함
  .slick-list {
    ${media.tablet} {
      margin: 0 -1rem;
    }
    ${media.mobile} {
      margin: 0;
    }
  }
  .slick-track {
    ${media.tablet} {
      margin: 0 1rem;
    }
    ${media.mobile} {
      margin: 0;
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

export const SliderItemWrap = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SliderItemImg = styled.img`
  width: 38rem !important;
  height: 24rem;
  border-radius: ${br.default} ${br.default} 0 0;
  @media (max-width: 1300px) {
    width: 32rem !important;
  }
  ${media.tablet} {
    width: 30rem !important;
  }
  ${media.mobile} {
    width: 90% !important;
    height: 20rem;
  }
`;

export const SliderItemInfo = styled.div`
  box-sizing: border-box;
  width: 38rem;
  height: 16rem;
  padding: ${gap.l};
  background-color: ${color.white};
  border-radius: ${br.default};
  border-radius: 0 0 ${br.default} ${br.default};
  @media (max-width: 1300px) {
    width: 32rem;
  }
  ${media.tablet} {
    width: 30rem;
  }
  ${media.mobile} {
    width: 90%;
    height: 15rem;
  }
`;

/* libraries */
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const SliderWrap = styled.div`
  display: block;
  width: 120rem;
  margin-bottom: 5rem;
  @media (max-width: 1300px) {
    width: 100rem;
  }
  @media (max-width: 1200px) {
    width: 90rem;
  }
  ${media.tablet} {
    width: 85rem;
  }
  ${media.mobile} {
    width: 80rem;
  }
  @media (max-width: 501px) {
    width: 60rem;
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
    width: 30rem !important;
  }
  @media (max-width: 1200px) {
    width: 25rem !important;
  }
  ${media.tablet} {
    width: 40rem !important;
  }
  ${media.mobile} {
    width: 90% !important;
    height: 20rem;
  }
  @media (max-width: 501px) {
    width: 45rem !important;
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
    width: 30rem;
  }
  @media (max-width: 1200px) {
    width: 25rem;
  }
  ${media.tablet} {
    width: 40rem;
  }
  ${media.mobile} {
    width: 90%;
    height: 15rem;
  }
  @media (max-width: 501px) {
    width: 45rem;
  }
`;

/* libraries */
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* static data */
import { COLOR_LIST as color, BREAK_POINTS as media } from '../../../../style';

export const CarouselArea = styled.div`
  width: 100%;
  height: 67rem;
  padding-top: 12rem;
  background-color: ${color.grey};
`;

export const CarouselWrap = styled(Slider)`
  width: 76.8rem;
  height: 50rem;
  margin: auto;

  ${media.mobile} {
    width: 60rem;
  }

  .slick-list {
    border-radius: 1.8rem;
  }
  .slick-arrow {
    width: 7rem;
    height: 7rem;
    z-index: 100;
    ${media.mobile} {
      display: none !important;
    }
  }
  .slick-arrow:before {
    font-size: 7rem;
    opacity: 1;
    color: ${color.black};
    cursor: pointer;
    ${media.mobile} {
      display: none !important;
    }
  }
  .slick-dots {
    bottom: -4rem;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 50rem;
  border-radius: 1.8rem;
  ${media.mobile} {
    width: 60rem !important;
  }
`;

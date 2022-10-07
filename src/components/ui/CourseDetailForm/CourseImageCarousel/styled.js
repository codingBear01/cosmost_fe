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

export const SliderArea = styled.div`
  width: 100%;
  height: 67rem;
  padding-top: 12rem;
  background-color: ${color.grey};
`;

export const SliderWrap = styled(Slider)`
  width: 76.8rem;
  height: 50rem;
  margin: auto;

  ${media.mobile} {
    width: 65rem;
  }

  .slick-list {
    border-radius: 1.8rem;
  }
  .slick-arrow {
    width: 7rem;
    height: 7rem;
    z-index: 100;
  }
  .slick-arrow:before {
    opacity: 1;
    font-size: 7rem;
    color: ${color.black};
    cursor: pointer;
  }
  .slick-dots {
    bottom: -4rem;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 50rem;
  border-radius: 1.8rem;
`;

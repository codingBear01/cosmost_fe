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
  width: 76.8rem;
  height: 53rem;
`;

export const StyledSlider = styled(Slider)``;

export const Slide = styled.div`
  box-sizing: border-box;
  display: flex !important;
  align-items: flex-start;
  width: 30rem;
  height: 37.5rem;
  padding: 5rem;
  color: ${color.white};
  background-image: url('${({ bg_img }) => bg_img}');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SlideText = styled.span``;

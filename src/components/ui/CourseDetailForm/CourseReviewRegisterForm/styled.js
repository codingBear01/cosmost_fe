/* libraries */
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../../style';

export const StyledCourseReviewRegisterForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  width: 76.8rem;
  padding: 4rem;
  border-bottom: 1px solid ${color.white};
`;

export const ReviewRegisterTitleAndRateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ReviewRegisterTitle = styled.span`
  font-size: ${fs.xl};
  font-weight: 600;
`;

export const ReviewRegisterRate = styled.div`
  font-size: ${fs.l};
  color: ${color.white};
`;

export const ReviewRegisterTextarea = styled.textarea`
  width: 68.8rem;
  height: 22rem;
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  outline: none;
  background: none;
  color: ${color.white};
`;

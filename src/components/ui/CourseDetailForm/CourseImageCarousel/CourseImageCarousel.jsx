/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { COURSE_DETAIL } from './../../../../store/';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

console.log(COURSE_DETAIL);

function CourseImgCarousel() {
  return (
    <S.SliderArea>
      <S.SliderWrap {...sliderSettings}>
        {COURSE_DETAIL &&
          COURSE_DETAIL.coureImages.map((item) => (
            <S.CarouselImage key={item.id} src={item.imageUrl} alt={item.alt} />
          ))}
      </S.SliderWrap>
    </S.SliderArea>
  );
}

export default CourseImgCarousel;

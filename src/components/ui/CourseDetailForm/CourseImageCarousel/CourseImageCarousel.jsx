/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { COURSE_DETAIL } from './../../../../store/';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CourseImgCarousel({ courseData }) {
  return (
    <S.CarouselArea>
      <S.CarouselWrap {...carouselSettings}>
        {courseData &&
          courseData.courseImages.map((item) => (
            <S.CarouselImage key={item.id} src={item.imageUrl} alt={item.alt} />
          ))}
      </S.CarouselWrap>
    </S.CarouselArea>
  );
}

export default CourseImgCarousel;

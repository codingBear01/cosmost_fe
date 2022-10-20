/* libraries */
import React from 'react';
/* components */
import * as S from './styled';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CourseImgCarousel({ courseDetail }) {
  return (
    <S.CarouselArea>
      <S.CarouselWrap {...carouselSettings}>
        {courseDetail &&
          courseDetail.courseImages.map((item) => (
            <S.CarouselImage key={item.id} src={item.imageUrl} alt={item.alt} />
          ))}
      </S.CarouselWrap>
    </S.CarouselArea>
  );
}

export default CourseImgCarousel;

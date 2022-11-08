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
  const indices = courseDetail.placeImgList.map((item) => item.placeImgOrder);

  return (
    <S.CarouselArea>
      <S.CarouselWrap {...carouselSettings}>
        {courseDetail &&
          courseDetail.placeImgList.map((item, index) => (
            <S.CarouselImage
              key={item.id}
              src={courseDetail.placeImgList[indices[index]].placeImgUrl}
              alt={item.placeImgSaveName}
            />
          ))}
      </S.CarouselWrap>
    </S.CarouselArea>
  );
}

export default CourseImgCarousel;

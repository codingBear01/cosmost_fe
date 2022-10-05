/* components */
import * as S from './styled';
import { CategoriesWrap, CourseTitle, CoursesWrap } from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
import { MAIN_SLIDER_DATA_LIST as data } from '../../../../data';

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
};

console.log(data);

function MainSlider() {
  return (
    <S.SliderWrap>
      <S.StyledSlider {...sliderSettings}>
        {data &&
          data.map((item, i) => (
            <S.Slide key={item.id} bg_img={item.imgUrl}>
              <S.SlideText>{item.title}</S.SlideText>
            </S.Slide>
          ))}
      </S.StyledSlider>
    </S.SliderWrap>
  );
}

export default MainSlider;

/* components */
import * as S from './styled';
import { CategoriesWrap, CourseTitle, CoursesWrap } from '../../../';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
import { MAIN_SLIDER_DATA_LIST, SLIDER_IMAGE_LIST } from '../../../../data';

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function MainSlider() {
  return (
    <S.SliderWrap>
      <S.StyledSlider {...sliderSettings}>
        {MAIN_SLIDER_DATA_LIST &&
          MAIN_SLIDER_DATA_LIST.map((item, i) => (
            <S.SliderItemWrap key={item.id}>
              <S.SliderItemImg src={item.imgUrl} alt={item.title} />
              <S.SliderItemInfo>
                <CourseTitle
                  fontSize={fs.xl}
                  rate={item.rate}
                  overflow="hidden"
                  textOverflow={'ellipsis'}
                  whiteSpace={'nowrap'}
                >
                  {item.title}
                </CourseTitle>
                <CategoriesWrap categories={item.categories}></CategoriesWrap>
                <CoursesWrap courses={item.courses}></CoursesWrap>
              </S.SliderItemInfo>
            </S.SliderItemWrap>
          ))}
      </S.StyledSlider>
    </S.SliderWrap>
  );
}

export default MainSlider;

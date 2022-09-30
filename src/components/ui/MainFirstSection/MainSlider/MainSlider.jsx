/* components */
import * as S from './styled';
import { CourseTitle } from '../../../';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
import { SLIDER_IMAGE_LIST } from '../../../../data';

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
        {SLIDER_IMAGE_LIST &&
          SLIDER_IMAGE_LIST.map((img, i) => (
            <S.SliderItemWrap key={img.id}>
              <S.SliderItemImg src={img.imgUrl} alt={img.alt} />
              <S.SliderItemInfo>
                <CourseTitle fontSize={fs.xl}>코스 제목</CourseTitle>
                <div>
                  <span>@지역구</span>
                  <span>@테마별</span>
                </div>
                <div>
                  1번 장소 👉 2번 장소 👉 3번 장소 👉 4번 장소 👉 5번 장소
                </div>
              </S.SliderItemInfo>
            </S.SliderItemWrap>
          ))}
      </S.StyledSlider>
    </S.SliderWrap>
  );
}

export default MainSlider;

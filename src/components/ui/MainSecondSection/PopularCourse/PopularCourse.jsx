/* hooks */
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { CourseImg, CourseTitle, EachCourseWrap, HashTag } from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs, COLOR_LIST as color } from '../../../../style';

function PopularCourse({ item }) {
  return (
    <EachCourseWrap>
      <CourseImg
        src={item.imgUrl}
        alt={item.title}
        width={'27.5rem'}
        height={'20rem'}
      ></CourseImg>
      <S.PoplularCourseBox>
        <CourseTitle rate={item.rate} fontSize={fs.l}>
          {item.title}
        </CourseTitle>
        <div>
          {item.hashTags.map((tag, i) => (
            <HashTag key={tag.id} fontSize={fs.xs}>
              {tag.hashTagName}
            </HashTag>
          ))}
        </div>
      </S.PoplularCourseBox>
    </EachCourseWrap>
  );
}

export default PopularCourse;

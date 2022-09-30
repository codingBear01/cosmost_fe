/* components */
import * as S from './styled';
import { CourseImg, CourseTitle, HashTag } from '../../..';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../../style';

function AddedCourse({ item }) {
  return (
    <S.AddedCourseWrap>
      <CourseImg
        src={item.imgUrl}
        alt={item.title}
        width={'27.5rem'}
        height={'20rem'}
      ></CourseImg>
      <S.AddedCourseInfo>
        <CourseTitle rate={item.rate} fontSize={fs.l}>
          {item.title}
        </CourseTitle>
        <S.AddedCourseDesc>
          {item.desc.length > 200
            ? `${item.desc.substring(0, 200)}...`
            : `${item.desc}`}
        </S.AddedCourseDesc>
        <div>
          {item.hashTags.map((tag, i) => (
            <HashTag fontSize={fs.xs}>{tag.hashTagName}</HashTag>
          ))}
        </div>
      </S.AddedCourseInfo>
    </S.AddedCourseWrap>
  );
}

export default AddedCourse;

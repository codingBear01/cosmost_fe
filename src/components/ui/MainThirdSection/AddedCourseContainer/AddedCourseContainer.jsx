/* components */
import * as S from './styled';
import { AddedCourse } from './../AddedCourse/';
import { CourseContainer } from '../../../';
/* static data */
import { THIRD_SECTION_DATA_LIST as data } from '../../../../data';
import { GAP_LIST as gap } from '../../../../style';

function AddedCourseContainer() {
  return (
    <CourseContainer mt={gap.l}>
      {data &&
        data.map((item, i) => (
          <AddedCourse key={item.id} item={item}></AddedCourse>
        ))}
    </CourseContainer>
  );
}

export default AddedCourseContainer;

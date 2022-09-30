/* components */
import * as S from './styled';
import { AddedCourse } from './../AddedCourse/';
import { CourseContainer } from '../../../';
/* static data */
import { THIRD_SECTION_DATA_LIST as data } from '../../../../data';

function AddedCourseContainer() {
  return (
    <CourseContainer>
      {data &&
        data.map((item, i) => (
          <AddedCourse key={item.id} item={item}></AddedCourse>
        ))}
    </CourseContainer>
  );
}

export default AddedCourseContainer;

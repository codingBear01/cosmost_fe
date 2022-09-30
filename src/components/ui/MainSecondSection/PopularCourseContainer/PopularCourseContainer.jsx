/* components */
import { PopularCourse } from '../PopularCourse';
import { CourseContainer } from '../../../';
/* static data */
import { SECOND_SECTION_DATA_LIST as data } from '../../../../data';

function PopularCourseContainer() {
  return (
    <CourseContainer>
      {data &&
        data.map((item, i) => (
          <PopularCourse key={item.id} item={item}></PopularCourse>
        ))}
    </CourseContainer>
  );
}

export default PopularCourseContainer;

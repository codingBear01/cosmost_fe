/* components */
import { PopularCourse } from '../PopularCourse';
import { CourseContainer } from '../../../';
/* static data */
import { SECOND_SECTION_DATA_LIST as data } from '../../../../data';
import { GAP_LIST as gap } from '../../../../style';

function PopularCourseContainer() {
  return (
    <CourseContainer mt={gap.l}>
      {data &&
        data.map((item, i) => (
          <PopularCourse key={item.id} item={item}></PopularCourse>
        ))}
    </CourseContainer>
  );
}

export default PopularCourseContainer;

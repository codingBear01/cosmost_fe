/* components */
import * as S from './styled';
import { PopularCourse } from '../PopularCourse';
/* static data */
import { SECOND_SECTION_DATA_LIST as data } from '../../../../data';

function PopularCourseContainer() {
  return (
    <S.PopularCourseContainer>
      {data &&
        data.map((item, i) => (
          <PopularCourse key={item.id} item={item}></PopularCourse>
        ))}
    </S.PopularCourseContainer>
  );
}

export default PopularCourseContainer;

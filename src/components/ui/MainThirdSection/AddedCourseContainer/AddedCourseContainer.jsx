/* components */
import * as S from './styled';
import { AddedCourse } from './../AddedCourse/';
/* static data */
import { THIRD_SECTION_DATA_LIST as data } from '../../../../data';

function AddedCourseContainer() {
  return (
    <S.AddedCourseContainer>
      {data &&
        data.map((item, i) => (
          <AddedCourse key={item.id} item={item}></AddedCourse>
        ))}
    </S.AddedCourseContainer>
  );
}

export default AddedCourseContainer;

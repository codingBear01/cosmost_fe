/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
import { TheMostGuCourse } from '../TheMostGuCourse/';
import { CourseContainer } from '../../../';
/* static data */
import { FOURTH_SECTION_DATA_LIST as data } from '../../../../data';

function TheMostGuContainer() {
  return (
    <CourseContainer>
      {data &&
        data.map((item, i) => (
          <TheMostGuCourse key={item.id} item={item}></TheMostGuCourse>
        ))}
    </CourseContainer>
  );
}

export default TheMostGuContainer;

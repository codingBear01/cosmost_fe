/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
import { TheMostGuCourse } from '../TheMostGuCourse/';
/* static data */
import { FOURTH_SECTION_DATA_LIST as data } from '../../../../data';

function TheMostGuContainer() {
  return (
    <S.TheMostGuContainer>
      {data &&
        data.map((item, i) => (
          <TheMostGuCourse key={item.id} item={item}></TheMostGuCourse>
        ))}
    </S.TheMostGuContainer>
  );
}

export default TheMostGuContainer;

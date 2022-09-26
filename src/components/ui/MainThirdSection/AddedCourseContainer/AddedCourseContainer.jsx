import React from 'react';
import * as S from './styled';
import { AddedCourse } from './../AddedCourse/';

function AddedCourseContainer() {
  return (
    <S.AddedCourseContainer>
      <AddedCourse></AddedCourse>
      <AddedCourse></AddedCourse>
      <AddedCourse></AddedCourse>
      <AddedCourse></AddedCourse>
    </S.AddedCourseContainer>
  );
}

export default AddedCourseContainer;

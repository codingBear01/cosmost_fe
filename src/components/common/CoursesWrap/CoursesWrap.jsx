import React from 'react';
import * as S from './styled';

function CoursesWrap({ courses }) {
  return (
    <S.StyledCoursesWrap>
      {courses.map((course, i) => (
        <div key={course.id} style={{ display: 'flex' }}>
          <span>{course.courseName}</span>
          {courses.length === i + 1 ? <span></span> : <span>👉</span>}
        </div>
      ))}
    </S.StyledCoursesWrap>
  );
}

export default CoursesWrap;

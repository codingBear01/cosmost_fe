import React from 'react';
import * as S from './styled';

function CoursesWrap({ courses }) {
  return (
    <S.StyledCoursesWrap>
      {courses.map((course, i) => (
        <div key={course.id} style={{ display: 'flex', alignItems: 'center' }}>
          <span>{course.courseName}</span>
          {courses.length === i + 1 ? (
            <span></span>
          ) : (
            <span style={{ margin: '0 0.5rem' }}>👉</span>
          )}
        </div>
      ))}
    </S.StyledCoursesWrap>
  );
}

export default CoursesWrap;

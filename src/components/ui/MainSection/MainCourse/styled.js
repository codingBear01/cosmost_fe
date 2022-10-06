/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

export const StyledMainCourse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  align-self: ${({ a_self }) => a_self};
  height: 45rem;
  width: 35rem;
  margin-top: 5rem;
  padding: 5rem;
  box-shadow: 0 0 2px 1px ${color.grey};
  background-color: ${color.white};
  border-radius: 1.8rem;
  color: ${color.black};
  transition: all 0.15s ease-in;

  &:hover {
    scale: 1.01;
  }
`;

export const CourseTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CourseTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

export const CoureseLink = styled(Link)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${color.lightBlue};

  &:hover {
    padding-bottom: 0.3rem;
    border-bottom: 2px solid ${color.lightBlue};
  }

  svg {
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  }
`;

export const CourseIcon = styled.div`
  height: 15rem;
  font-size: 15rem;
`;

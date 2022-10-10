/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../../style';

export const StyledSelectingCategoryArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${color.white};
`;

export const Categories = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Category = styled.span`
  padding-bottom: 0.3rem;
  border-bottom: ${({ isClickedCategory }) =>
    isClickedCategory ? `2px solid ${color.lightBlue}` : ''};
  font-size: ${fs.xl};
  font-weight: 600;
  color: ${({ isClickedCategory }) =>
    isClickedCategory ? `${color.white}` : `${color.grey}`};
  cursor: pointer;
  transition: 0.15s;
`;

export const SubordinateCategories = styled.div`
  margin-top: 2rem;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const SubordinateCategory = styled.button`
  margin: 0.5rem;
  padding: 1rem 2rem;
  border-radius: ${br.default};
  background-color: ${color.lightBlue};
  font-weight: 600;
  color: ${color.white};
  transition: 0.3s;

  &:hover {
    background-color: ${color.darkBlue};
  }
`;

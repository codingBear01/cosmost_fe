/* libraries */
import styled from 'styled-components';
/* components */
import { Input } from '../../common/Input';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const FirstSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FirstSectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50rem;
  margin-top: 4rem;
`;

const StyledFirstSectionTitle = styled.span`
  font-size: 4.5rem;
  font-weight: 600;
  color: ${color.white};
  text-align: center;
`;

export const FirstSectionTitle = ({ title }) => (
  <StyledFirstSectionTitle>{title}</StyledFirstSectionTitle>
);

export const MainSearchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const SearchInput = styled(Input)`
  margin: 1rem;

  &:focus {
    outline: none;
  }
`;

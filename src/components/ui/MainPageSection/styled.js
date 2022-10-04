/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const MainPageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 76.8rem;
  height: 100%;
  background-color: ${color.black};
`;

export const MainPageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc};
  width: 100%;
  height: ${({ h }) => h};
  margin: ${({ mr }) => mr};
  padding: ${({ pd }) => pd};
  background-color: ${({ bg_color }) => bg_color};

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const MainPageTextWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const MainPageText = styled.span`
  margin-bottom: ${gap.xl};
  font-size: ${({ fs }) => fs};
  font-weight: 600;
  color: ${({ col }) => col};
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 2rem;
  padding: 0 2.5rem 1.5rem 0.5rem;
  border-bottom: 2px solid ${color.white};
  font-size: ${fs.xl};
  font-weight: 600;
  color: ${color.white};
`;

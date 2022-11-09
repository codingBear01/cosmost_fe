/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  GAP_LIST as gap,
} from '../../../style';

export const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: ${br.xl};
`;

export const UserInformationList = styled.ul``;

export const UserInformationItem = styled.li`
  width: 100%;
  margin: 20px 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${color.white};
`;

export const UserInformationText = styled.span`
  margin-right: ${({ marginRight }) => marginRight};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '13px')};
  font-weight: 600;
  color: ${({ color }) => color};
`;

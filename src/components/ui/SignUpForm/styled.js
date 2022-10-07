/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  GAP_LIST as gap,
} from '../../../style';

export const UserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '')};
`;

export const UserInfoDropDownWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  margin-bottom: ${gap.xl};
`;

export const UploadProfilePicBtn = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid white;
  border-radius: ${br.default};
  background-image: ${({ bgImgUrl }) => bgImgUrl};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${color.white};
`;

export const ProfilePicUploadInput = styled.input`
  display: none;
`;

export const UserInfoDropDown = styled.select`
  width: 160px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${color.white};
  background: none;
  color: ${color.white};

  option {
    color: ${color.black};
  }
`;

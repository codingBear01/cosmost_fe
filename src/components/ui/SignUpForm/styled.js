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

export const UploadProfilePicBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid white;
  border-radius: ${br.default};
  background-image: ${({ bgImgUrl }) => bgImgUrl};
  background-repeat: no-repeat;
  background-size: cover;
  color: ${color.white};
  cursor: pointer;
`;

export const ProfilePicUploadInput = styled.input`
  display: none;
`;

export const MessageBox = styled.div`
  width: 250px;
  height: 10px;
  margin: 5px 0;
`;

export const ErrorMessage = styled.p`
  align-self: start;
  margin-left: 10px;
  color: ${color.darkRed};
  word-break: break-all;
  font-size: 11px;
`;

export const SuccessMessage = styled.p`
  align-self: start;
  margin-left: 10px;
  color: ${color.skyBlue};
  word-break: break-all;
  font-size: 11px;
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

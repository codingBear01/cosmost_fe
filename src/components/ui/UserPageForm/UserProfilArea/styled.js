/* libraries */
import styled from 'styled-components';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../../style';

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  padding: 10px 15px 20px;
  font-size: 16px;
  border-bottom: 1px solid ${color.white};
`;

export const ProfilePicWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 5px;
  }
`;

export const ProfileUtilWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;a
  width: 220px;
  height: 100%;
  margin-left: 10px;
  padding-top: 10px;

  button {
    color: ${color.white};
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: ${color.white};
  }
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

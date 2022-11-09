/* S.UserInformationItembraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import * as S from './styled';
import { UtilDiv, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function UserInformationForm() {
  const user = useLocation().state;
  console.log(user);
  return (
    <UtilDiv>
      <UtilTitle>
        <span style={{ fontSize: '22px', color: `${color.lightBlue}` }}>
          {user.nickname}
        </span>{' '}
        님의 회원정보
      </UtilTitle>
      <S.ProfilePic src={user.profileImgSaveUrl} alt={user.nickname} />
      <S.UserInformationList>
        <S.UserInformationItem>
          <S.UserInformationText
            marginRight={'10px'}
            fontSize={'15px'}
            color={color.lightBlue}
          >
            아이디
          </S.UserInformationText>
          <S.UserInformationText>{user.loginId}</S.UserInformationText>
        </S.UserInformationItem>
        <S.UserInformationItem>
          <S.UserInformationText
            marginRight={'10px'}
            fontSize={'15px'}
            color={color.lightBlue}
          >
            닉네임
          </S.UserInformationText>
          <S.UserInformationText>{user.nickname}</S.UserInformationText>
        </S.UserInformationItem>
        <S.UserInformationItem>
          <S.UserInformationText
            marginRight={'10px'}
            fontSize={'15px'}
            color={color.lightBlue}
          >
            이메일
          </S.UserInformationText>
          <S.UserInformationText>{user.email}</S.UserInformationText>
        </S.UserInformationItem>
        <S.UserInformationItem>
          <S.UserInformationText
            marginRight={'10px'}
            fontSize={'15px'}
            color={color.lightBlue}
          >
            주소
          </S.UserInformationText>
          <S.UserInformationText>{user.address}</S.UserInformationText>
        </S.UserInformationItem>
        <S.UserInformationItem>
          <S.UserInformationText
            marginRight={'10px'}
            fontSize={'15px'}
            color={color.lightBlue}
          >
            연령대
          </S.UserInformationText>
          <S.UserInformationText>{user.ageGroup}대</S.UserInformationText>
        </S.UserInformationItem>
        <S.UserInformationItem>
          <S.UserInformationText
            marginRight={'10px'}
            fontSize={'15px'}
            color={color.lightBlue}
          >
            결혼 여부
          </S.UserInformationText>
          <S.UserInformationText>
            {user.married === 'SINGLE' ? '미혼' : '기혼'}
          </S.UserInformationText>
        </S.UserInformationItem>
      </S.UserInformationList>
    </UtilDiv>
  );
}

export default UserInformationForm;

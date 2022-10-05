import React from 'react';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from '../../../';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function UserProfilArea() {
  return (
    <S.ProfileWrap>
      {/* 프로필 사진 */}
      <S.ProfilePicWrap>
        <ProfilePic
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDZfMjI0/MDAxNTU0NDc3OTE1Mjc5.eljTe4bpgeYf2O0fbBqpB74ruNcyO5dLd2GZtXL4VEYg.p0ZIX-d01subwWzvY53FAF_hF2BHnKXuIpEB2Av8eg8g.JPEG.xvx404/1542459444594.jpg?type=w800"
          alt="profile_pic"
          w={'60px'}
          h={'60px'}
        />
        <span>닉네임</span>
      </S.ProfilePicWrap>
      {/* 유저 정보 */}
      <S.ProfileUtilWrap>
        <S.UserInfoWrap>
          <div>
            <span>랭킹</span>
            <span>1</span>
          </div>
          <div>
            <span>팔로워</span>
            <span>100</span>
          </div>
          <div>
            <span>팔로잉</span>
            <span>100</span>
          </div>
        </S.UserInfoWrap>
        <Button
          type="button"
          w={'220px'}
          h={'20px'}
          fs={'12px'}
          bg_color={color.darkBlue}
          ho_color={color.navy}
        >
          프로필 편집
        </Button>
      </S.ProfileUtilWrap>
    </S.ProfileWrap>
  );
}

export default UserProfilArea;

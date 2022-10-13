/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
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
          width={'60px'}
          height={'60px'}
        />
        <span>닉네임</span>
      </S.ProfilePicWrap>
      {/* 유저 정보 */}
      <S.ProfileUtilWrap>
        <S.UserInfoWrap>
          <Link to="/">
            <span>랭킹</span>
            <span>1</span>
          </Link>
          <Link to="followers">
            <span>팔로워</span>
            <span>100</span>
          </Link>
          <Link to="followings">
            <span>팔로잉</span>
            <span>100</span>
          </Link>
        </S.UserInfoWrap>
        <Link to="/sign-up">
          <Button
            type="button"
            width={'220px'}
            height={'25px'}
            font_size={'12px'}
            bgColor={color.darkBlue}
            hoveredBgColor={color.navy}
          >
            프로필 편집
          </Button>
        </Link>
      </S.ProfileUtilWrap>
    </S.ProfileWrap>
  );
}

export default UserProfilArea;

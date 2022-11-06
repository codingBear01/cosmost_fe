/* libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from './../../../';
/* APIs */
import {
  getCourseAuthor,
  handleFollow,
  fetchIsFollowed,
} from '../../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function FollowListItem({ follow, isFollower }) {
  const [user, setUser] = useState('');
  const followId = isFollower ? follow.authId : follow.followingId;
  const myId = isFollower ? follow.followingId : follow.authId;
  const [isFollowed, setIsFollowed] = useState([]);
  const [isFollowedChanged, setIsFollowedChanged] = useState(false);

  console.log(isFollower);

  /* APIs */
  /** 코스 리뷰 작성자 조회 */
  useEffect(() => {
    getCourseAuthor(followId, setUser);
  }, []);
  /** 코스 리뷰 좋아요 여부 조회 */
  useEffect(() => {
    fetchIsFollowed(followId, setIsFollowed);
  }, [isFollowedChanged]);

  return (
    <S.StyledFollowListItem>
      <Link to={`/user/${followId}`}>
        <ProfilePic
          src={user.profileImgSaveUrl}
          alt={user.nickname}
          width={'60px'}
          height={'60px'}
        />
        <span>{followId}</span>
        <span>{user.nickname}</span>
      </Link>
      {!isFollowed[0] && (
        <Button
          type="button"
          width={'70px'}
          height={'30px'}
          fontSize={'12px'}
          color={color.black}
          bgColor={color.darkGreen}
          hoveredBgColor={color.lightGreen}
          onClick={() =>
            handleFollow(
              'follow',
              followId,
              setIsFollowedChanged,
              isFollowedChanged
            )
          }
        >
          팔로우
        </Button>
      )}
      {isFollowed[0] && (
        <Button
          type="button"
          width={'70px'}
          height={'30px'}
          fontSize={'12px'}
          color={color.black}
          bgColor={color.darkRed}
          hoveredBgColor={color.red}
          onClick={() =>
            handleFollow(
              'unfollow',
              followId,
              setIsFollowedChanged,
              isFollowedChanged
            )
          }
        >
          언팔로우
        </Button>
      )}
    </S.StyledFollowListItem>
  );
}

export default FollowListItem;

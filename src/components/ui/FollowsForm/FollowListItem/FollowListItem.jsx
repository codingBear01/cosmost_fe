/* libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from './../../../';
/* APIs */
import { getCourseAuthor } from '../../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function FollowListItem({ follow, isFollower }) {
  const [user, setUser] = useState('');
  const followId = isFollower ? follow.authId : follow.followingId;
  const myId = isFollower ? follow.followingId : follow.authId;
  const [isFollowed, setIsFollowed] = useState([]);
  const [isFollowedChanged, setIsFollowedChanged] = useState(false);

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';

  /* APIs */
  useEffect(() => {
    getCourseAuthor(followId, setUser);
  }, []);

  /** 팔로우/언팔로우 */
  const handleFollow = (type) => {
    const URLS = {
      follow: `${process.env.REACT_APP_API}/popularities`,
      unfollow: `${process.env.REACT_APP_API}/popularities/${followId}/following`,
    };
    const url = URLS[type];
    const body = {
      followingId: followId,
      type: 'follow',
    };
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    if (type === 'follow') {
      axios
        .post(url, body, config)
        .then((response) => {
          setIsFollowedChanged(!isFollowedChanged);
        })
        .catch((error) => new Error(error));
    } else {
      axios
        .delete(url, config)
        .then((response) => {
          setIsFollowedChanged(!isFollowedChanged);
        })
        .catch((error) => new Error(error));
    }
  };

  /** 상대방과 팔로우 여부 조회 */
  const fetchIsFollowed = (id) => {
    const url = `${process.env.REACT_APP_API}/popularities/${id}?type=follow`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .get(url, config)
      .then((response) => setIsFollowed(response.data))
      .catch((error) => new Error(error));
  };
  useEffect(() => {
    fetchIsFollowed(followId);
  }, [isFollowedChanged]);

  console.log(isFollowed[0]);
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
          onClick={() => handleFollow('follow')}
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
          onClick={() => handleFollow('unfollow')}
        >
          언팔로우
        </Button>
      )}
    </S.StyledFollowListItem>
  );
}

export default FollowListItem;

/* libraries */
import React, { useState, useEffect } from 'react';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from './../../../';
/* APIs */
import {
  fetchUser,
  fetchCourseAuthor,
  handleFollow,
  fetchIsFollowed,
} from '../../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function FollowListItem({ follow, isFollowing, token }) {
  const [author, setAuthor] = useState('');
  const [user, setUser] = useState('');
  const followId = isFollowing ? follow.followingId : follow.authId;
  const [isFollowed, setIsFollowed] = useState([]);
  const [isFollowedChanged, setIsFollowedChanged] = useState(false);

  /* APIs */
  /** 코스 리뷰 작성자 조회 */
  useEffect(() => {
    fetchCourseAuthor(followId, setAuthor);
    fetchUser(token, setUser);
  }, []);
  /** 코스 리뷰 좋아요 여부 조회 */
  useEffect(() => {
    fetchIsFollowed(followId, setIsFollowed, token);
  }, [isFollowedChanged]);

  return (
    <S.StyledFollowListItem>
      <ProfilePic
        src={author.profileImgSaveUrl}
        alt={author.nickname}
        width={'60px'}
        height={'60px'}
      />
      <S.followNameAndButtonWrap>
        <span>{author.nickname}</span>
        {token && user.id !== author.id && (
          <>
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
                    isFollowedChanged,
                    token
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
                    isFollowedChanged,
                    token
                  )
                }
              >
                언팔로우
              </Button>
            )}
          </>
        )}
      </S.followNameAndButtonWrap>
    </S.StyledFollowListItem>
  );
}

export default FollowListItem;

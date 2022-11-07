/* libraries */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
/* components */
import * as S from './styled';
import { UtilForm, UtilTitle } from '../..';
import { FollowListItem } from './';

function FollowsForm({ state }) {
  const token = localStorage.getItem('token');

  const authorId = useLocation().state;
  const path = useLocation().pathname;
  const isFollowing = path.includes('followings');

  const [follows, setFollows] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  const page = useRef(0);
  const observedTarget = useRef(null);

  const type = isFollowing ? 'following' : 'follower';
  const URLS = {
    follower: `${process.env.REACT_APP_API}/popularities?filter=auth&type=follower&sort=id,desc&page=${page.current}&size=4`,
    following: `${process.env.REACT_APP_API}/popularities?filter=auth&type=following&sort=id,desc&page=${page.current}&size=4`,
  };

  /* APIs */
  /** 팔로워 조회 */
  const fetchMyFollowersOrFollowings = useCallback(async () => {
    try {
      const url = authorId
        ? `${process.env.REACT_APP_API}/popularities?filter=cosmosts&type=follower&sort=id,desc&page=${page.current}&size=4`
        : URLS[type];
      const config = {
        headers: {
          Authorization: authorId ? authorId : token,
        },
        timeout: 3000,
      };
      const result = await axios.get(url, config);
      const { data } = result;

      if (isFollowing) {
        setFollows((prev) =>
          prev.concat(data[0].readFollowingEntityResponseList)
        );
        setIsLastPage(
          data[0].readFollowingEntityResponseList[
            data[0].readFollowingEntityResponseList.length - 1
          ].whetherLastPage
        );
      } else {
        setFollows((prev) => prev.concat(data[0].readFollowEntityResponseList));
        setIsLastPage(
          data[0].readFollowEntityResponseList[
            data[0].readFollowEntityResponseList.length - 1
          ].whetherLastPage
        );
      }

      if (!isLastPage) {
        page.current += 1;
      }
    } catch (error) {
      new Error(error);
    }
  }, [page.current]);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchMyFollowersOrFollowings();
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [isLastPage, follows]);

  return (
    <UtilForm padding={'15.4rem 10rem'}>
      <UtilTitle>{isFollowing ? '팔로잉' : '팔로워'}</UtilTitle>
      <S.FollowList>
        {follows[0] &&
          follows.map((follow, i) => (
            <FollowListItem
              key={follow.id}
              follow={follow}
              isFollowing={isFollowing}
            />
          ))}
      </S.FollowList>
      <div ref={observedTarget}></div>
    </UtilForm>
  );
}

export default FollowsForm;

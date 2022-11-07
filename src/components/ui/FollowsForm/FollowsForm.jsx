/* libraries */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
/* components */
import * as S from './styled';
import { UtilForm, UtilTitle } from '../..';
import { FollowListItem } from './';

function FollowsForm({ isFollower, state }) {
  const page = useRef(0);
  const observedTarget = useRef(null);
  const [follows, setFollows] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const authorId = useLocation().state;
  /* APIs */
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
  /** 나의 팔로워 조회 */
  const fetchMyFollowersOrFollowings = useCallback(
    async (isFollower, token) => {
      try {
        const url = authorId
          ? `${process.env.REACT_APP_API}/popularities?filter=cosmosts&type=follower&sort=id,desc&page=${page.current}&size=4`
          : `${process.env.REACT_APP_API}/popularities?filter=auth&type=${
              isFollower ? 'follower' : 'following'
            }&sort=id,desc&page=${page.current}&size=4`;
        const config = {
          headers: {
            Authorization: authorId ? 107 : token,
          },
          timeout: 3000,
        };
        console.log(url);
        const result = await axios.get(url, config);
        const { data } = result;
        console.log(data[0].readFollowEntityResponseList);

        setFollows((prev) =>
          prev.concat(authorId ? data[0].readFollowEntityResponseList : data)
        );
        setIsLastPage(data[data.length - 1].whetherLastPage);

        if (!isLastPage) {
          page.current += 1;
        }
      } catch (error) {
        new Error(error);
      }
    },
    []
  );

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchMyFollowersOrFollowings(isFollower, token);
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [follows, isLastPage]);

  return (
    <UtilForm padding={'15.4rem 10rem'}>
      <UtilTitle>{isFollower ? '팔로워' : '팔로잉'}</UtilTitle>
      <S.FollowList>
        {follows[0] &&
          follows.map((follow, i) => (
            <FollowListItem
              key={follow.id}
              follow={follow}
              isFollower={isFollower}
            />
          ))}
      </S.FollowList>
      <div ref={observedTarget}></div>
    </UtilForm>
  );
}

export default FollowsForm;

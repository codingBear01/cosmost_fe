/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, ProfilePic, UtilForm, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import { FOLLOWS } from '../../../store/temporaryArray';

function FollowsForm({ isFollower }) {
  return (
    <UtilForm padding={'15.4rem 10rem'}>
      <UtilTitle>{isFollower ? '팔로워' : '팔로잉'}</UtilTitle>
      <S.FollowList>
        {FOLLOWS &&
          FOLLOWS.map((item) => (
            <S.FollowListItem key={item.id}>
              <Link to={`/user/${item.id}`}>
                <ProfilePic
                  src={item.imgUrl}
                  alt={item.alt}
                  width={'60px'}
                  height={'60px'}
                />
                <span>{item.nickname}</span>
              </Link>
              <Button
                type="button"
                width={'70px'}
                height={'30px'}
                fontSize={'12px'}
                color={color.black}
                bgColor={item.isFollow ? color.darkRed : color.darkGreen}
                hoveredBgColor={item.isFollow ? color.red : color.lightGreen}
              >
                {item.isFollow ? '언팔로우' : '팔로우'}
              </Button>
            </S.FollowListItem>
          ))}
      </S.FollowList>
    </UtilForm>
  );
}

export default FollowsForm;

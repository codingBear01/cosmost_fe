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
    <UtilForm pd={'15.4rem 10rem'}>
      <UtilTitle>{isFollower ? '팔로워' : '팔로잉'}</UtilTitle>
      <S.FollowList>
        {FOLLOWS &&
          FOLLOWS.map((item) => (
            <S.FollowListItem key={item.id}>
              <Link>
                <ProfilePic
                  src={item.imgUrl}
                  alt={item.alt}
                  w={'60px'}
                  h={'60px'}
                />
                <span>{item.nickname}</span>
              </Link>
              <Button
                type="button"
                w={'70px'}
                h={'30px'}
                fs={'12px'}
                col={color.black}
                bg_col={item.isFollow ? color.darkRed : color.darkGreen}
                hov_bg_col={item.isFollow ? color.red : color.lightGreen}
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

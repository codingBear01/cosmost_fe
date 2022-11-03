import React from 'react';
/* components */
import * as S from './styled';
import { ProfilePic } from '../../../';

const MEDALS = {
  1: '🥇',
  2: '🥈',
  3: '🥉',
};

function RankerList({ items, type }) {
  const contentId = type === 'bestCourses' ? 'courseId' : 'userId';
  const contentName = type === 'bestCourses' ? 'title' : 'nickname';

  return (
    <S.RankerList>
      {items &&
        items.map((item) => (
          <S.RankerItem key={item.id}>
            <S.RankerMedal>{MEDALS[item.ranking]}</S.RankerMedal>
            <S.RankerItemText>{item.ranking}</S.RankerItemText>
            {type !== 'bestCourses' && (
              <ProfilePic
                src={item.profilePicUrl}
                alt={item[contentName]}
                width={'3rem'}
                height={'3rem'}
              />
            )}
            <S.RankerItemText type={type}>
              {item[contentName].length > 14
                ? `${item[contentName].substring(0, 15)}...`
                : item[contentName]}
            </S.RankerItemText>
          </S.RankerItem>
        ))}
    </S.RankerList>
  );
}

export default RankerList;

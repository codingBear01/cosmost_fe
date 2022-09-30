import React from 'react';
/* components */
import * as S from './styled';
/* static data */
import { HASH_TAG_LIST } from '../../../../data';

function MainHashTags() {
  return (
    <S.MainHashTagWrap>
      {HASH_TAG_LIST &&
        HASH_TAG_LIST.map((tag, i) => (
          <S.MainHashTag key={tag.id}>#{tag.text}</S.MainHashTag>
        ))}
    </S.MainHashTagWrap>
  );
}

export default MainHashTags;

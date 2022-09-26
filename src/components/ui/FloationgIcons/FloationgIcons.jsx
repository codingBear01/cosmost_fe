import React from 'react';
import * as S from './styled';
import { FaChevronUp } from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FloatingIcon } from './FloatingIcon/';

function FloationgIcons() {
  return (
    <S.FloatingIconsWrap>
      <FloatingIcon>
        <FaChevronUp />
      </FloatingIcon>
      <FloatingIcon>
        <AiTwotoneEdit />
      </FloatingIcon>
      <FloatingIcon>🚨</FloatingIcon>
    </S.FloatingIconsWrap>
  );
}

export default FloationgIcons;

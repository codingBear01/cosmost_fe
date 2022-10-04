/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function NextBtn({ src, alt, w, h }) {
  return (
    <>
      <S.StyledProfilePic src={src} alt={alt} w={w} h={h} />
    </>
  );
}

export default NextBtn;

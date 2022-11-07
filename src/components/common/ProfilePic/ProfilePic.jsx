/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function ProfilePic({ src, alt, width, height }) {
  return (
    <>
      <S.StyledProfilePic src={src} alt={alt} width={width} height={height} />
    </>
  );
}

export default ProfilePic;

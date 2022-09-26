import React from 'react';
import * as S from './styled';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <S.Footer>
      <BsGithub />
      <S.FooterInfo>
        <span>https://github.com/CosMost-BE</span>
        <span>https://github.com/codingBear01/cosMost_FE</span>
        <span>Mady By Team_NiceCream</span>
      </S.FooterInfo>
    </S.Footer>
  );
}

export default Footer;

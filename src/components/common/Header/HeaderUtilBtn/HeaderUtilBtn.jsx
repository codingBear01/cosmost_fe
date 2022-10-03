import React from 'react';
/* components */
import * as S from './styled';
import { HeaderIcon } from '../';
import { SmallProfilePic } from '../../../';
/* icons */
import * as AiIcons from 'react-icons/ai';

function HeaderUtilBtn({ isLogin }) {
  return (
    <>
      {isLogin ? (
        <SmallProfilePic
          src={
            'https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg'
          }
          alt={'profile_pic'}
        />
      ) : (
        <HeaderIcon>
          <AiIcons.AiOutlineLogin style={{ margin: '0' }} />
        </HeaderIcon>
      )}
    </>
  );
}

export default HeaderUtilBtn;

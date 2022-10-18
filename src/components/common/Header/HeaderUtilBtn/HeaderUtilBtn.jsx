/* librarie */
import React from 'react';
import { Link } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom } from '../../../../store';
/* components */
import { SmallProfilePic, Icon } from '../../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
function HeaderUtilBtn() {
  const loginToken = sessionStorage.getItem('token');
  const [isLoggedIn] = useRecoilState(loginStateAtom);

  return (
    <>
      {loginToken && isLoggedIn ? (
        <Link to={`/user/${loginToken}`}>
          <SmallProfilePic
            src={
              'https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg'
            }
            alt={'profile_pic'}
          />
        </Link>
      ) : (
        <Link to="/login">
          <Icon>
            <AiIcons.AiOutlineLogin style={{ margin: '0' }} />
          </Icon>
        </Link>
      )}
    </>
  );
}

export default HeaderUtilBtn;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { Button } from '../';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuIcon } from './HeaderMenuIcon';
import { GrClose } from 'react-icons/gr';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { RiPoliceCarLine } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <S.HeaderUtilWrap>
            <Link to="/course/register">
              <Button width={'14rem'} height={'4rem'} fontSize={'1.4rem'}>
                코스 등록하기
              </Button>
            </Link>

            <HeaderMenuIcon onMenuOpen={onMenuOpen}></HeaderMenuIcon>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>
      </S.Header>

      <S.MenuModal isMenuOpen={isMenuOpen}>
        <S.MenuModalList isMenuOpen={isMenuOpen}>
          <GrClose onClick={onMenuOpen} />

          {!isLogin && (
            <>
              <S.MenuModalListItem onClick={onClickLogin}>
                <IoMdLogIn />
                <span>로그인</span>
              </S.MenuModalListItem>
              <S.MenuModalListItem>
                <AiOutlineUserAdd />
                <span>회원가입</span>
              </S.MenuModalListItem>
            </>
          )}
          {isLogin && (
            <>
              <S.MenuModalListItem>
                <Link to="/user/my">
                  <img
                    src="https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
                    alt="img"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '100%',
                    }}
                  />
                  <span>닉네임</span>
                </Link>
              </S.MenuModalListItem>
              <S.MenuModalListItem>
                <IoMdLogOut />
                <span onClick={onClickLogin}>로그아웃</span>
              </S.MenuModalListItem>
              <S.MenuModalListItem>
                <RiPoliceCarLine />
                <span>신고하기</span>
              </S.MenuModalListItem>
            </>
          )}
          <S.MenuModalListItem>
            <span>
              <BiCategory />
            </span>
            <span>카테고리</span>
          </S.MenuModalListItem>
        </S.MenuModalList>
      </S.MenuModal>
    </>
  );
}

export default Header;

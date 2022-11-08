/* libraries */
import React from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom, MAIN_COURSES } from '../../../store';
/* components */
import * as S from './styled';
import { MainContentWrap, MainCourse, MainTextWrap } from '.';
import { Section } from '../..';
/* icons */
import * as FaIcons from 'react-icons/fa';
import { useEffect } from 'react';
function MainPageSection() {
  const token = localStorage.getItem('token');
  const [isLoggedIn] = useRecoilState(loginStateAtom);

  //네이버 로그인 토큰 받기
  useEffect(() => {
    // var naver_id_login = new window.naver_id_login(process.env.REACT_APP_X_NAVER_CLIENT_ID, "http://localhost:3000");
    // if(naver_id_login.oauthParams.access_token){
    //   alert(naver_id_login.oauthParams.access_token);
    //   console.log(naver_id_login);
    //   console.log(naver_id_login.getProfileData('nickname'));
    //   console.log(naver_id_login.getProfileData('email'));
    //   console.log(naver_id_login.getProfileData('age'));
    //   naver_id_login.get_naver_userprofile("naverSignInCallback()");
    //   function naverSignInCallback() {
    //     var naver_id_login = new window.naver_id_login(process.env.REACT_APP_X_NAVER_CLIENT_ID, "http://localhost:3000");
    //     alert(naver_id_login.getProfileData('email'));
    //     alert(naver_id_login.getProfileData('nickname'));
    //     alert(naver_id_login.getProfileData('age'));
    //  }
    // }
  }, []);

  return (
    <Section height={'100vh'} paddingBottom={'7rem'}>
      <S.MainPageContainer>
        <MainContentWrap padding={'10rem'}>
          {/* 메인 텍스트 */}
          <MainTextWrap />
          {/* 코스 등록 버튼 */}
          <S.CourseRegisterBtn
            to={token && isLoggedIn ? '/course-registration' : '/login'}
          >
            나만의 코스 공유하기
            <FaIcons.FaChevronRight />
          </S.CourseRegisterBtn>
        </MainContentWrap>
        {/* 메인 코스 */}
        {MAIN_COURSES &&
          MAIN_COURSES.map((item, i) => (
            <MainContentWrap key={item.id} padding={'0 10rem'}>
              <MainCourse item={item} />
            </MainContentWrap>
          ))}
      </S.MainPageContainer>
    </Section>
  );
}

export default MainPageSection;

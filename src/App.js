/* libraries */
import React, { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
/* reocoil */
import { useRecoilState } from 'recoil';
import { isLoggedInAtom } from './store';
/* components */
import {
  Header,
  Footer,
  PageContainer,
  // pages
  CourseDetail,
  CourseRegistration,
  Courses,
  EditUserMenu,
  FindingUserPage,
  Follows,
  Histories,
  InputAddress,
  InputDetailAddress,
  InputEmail,
  InputPassword,
  InputUser,
  Login,
  Main,
  Messages,
  User,
  UserInformation,
  WithdrawUser,
} from './components';

const WithHeaderAndFooter = () => {
  const path = useLocation().pathname;

  return (
    <>
      <Header />
      <Outlet />
      {path === '/courses/likes' || path === '/courses/mine' ? (
        <></>
      ) : (
        <Footer />
      )}
    </>
  );
};

const WithoutHeaderAndFooter = () => {
  return (
    <>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};

/* CONSTANTS */
const { Kakao } = window;

function App() {
  const [isLoggedIn] = useRecoilState(isLoggedInAtom);

  /* 프로젝트 실행 시 Kakao API KEY 값 초기화하는 함수 */
  useEffect(() => {
    if (process.env.REACT_APP_KAKAO_KEY)
      Kakao?.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<Main />} />
          <Route path="course-detail/:id" element={<CourseDetail />} />
          <Route path="courses/:type" element={<Courses />} />
        </Route>

        <Route element={<WithoutHeaderAndFooter />}>
          <Route path="others/followers" element={<Follows />} />
        </Route>

        <Route element={<WithoutHeaderAndFooter />}>
          {isLoggedIn ? (
            <>
              <Route path="user">
                <Route path=":id" element={<User />} />
                <Route path=":id/followers" element={<Follows />} />
                <Route path=":id/followings" element={<Follows />} />
                <Route path=":id/report-histories" element={<Histories />} />
                <Route path=":id/review-histories" element={<Histories />} />
                <Route path=":id/information" element={<UserInformation />} />
                <Route path="edit">
                  <Route path="menu" element={<EditUserMenu />} />
                  <Route path="email" element={<InputEmail />} />
                  <Route path="address" element={<InputAddress />} />
                  <Route
                    path="detail-address"
                    element={<InputDetailAddress />}
                  />
                  <Route path="password" element={<InputPassword />} />
                  <Route path="my-information" element={<InputUser />} />
                </Route>
                <Route path="withdrawal" element={<WithdrawUser />} />
              </Route>

              <Route
                path="course-registration"
                element={<CourseRegistration />}
              />
              <Route path="course-edit/:id" element={<CourseRegistration />} />
            </>
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="email-validation" element={<InputEmail />} />
              <Route path="address" element={<InputAddress />} />
              <Route path="detail-address" element={<InputDetailAddress />} />
              <Route path="sign-up" element={<InputUser />} />

              <Route path="find">
                <Route path="email-validation" element={<InputEmail />} />
                <Route path="id" element={<FindingUserPage />} />
                <Route path="pwd" element={<FindingUserPage />} />
              </Route>
            </>
          )}
        </Route>

        <Route
          path="withdrawal-message"
          element={<Messages type={'withdrawal'} />}
        />
        <Route path="error" element={<Messages type={'error'} />} />
        <Route path="*" element={<Messages type={'notFound'} />} />
      </Routes>
    </>
  );
}
export default App;

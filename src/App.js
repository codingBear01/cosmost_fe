/* libraries */
import React, { useEffect } from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom } from './store';
/* components */
import {
  Header,
  Footer,
  PageContainer,
  OrderingModal,
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
  Rankers,
  User,
  WithdrawUser,
} from './components';
/* router */
import { Routes, Route, Outlet } from 'react-router-dom';

const WithHeaderAndFooter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <OrderingModal />
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
  const token = localStorage.getItem('token');
  const [isLoggedIn] = useRecoilState(loginStateAtom);

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
          <Route path="rankers" element={<Rankers />} />
        </Route>
        <Route element={<WithoutHeaderAndFooter />}>
          {/* {!token && !isLoggedIn && ( */}
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

            <Route path="naver">
              <Route path="email-validation" element={<InputEmail />} />
              <Route path="address" element={<InputAddress />} />
              <Route path="detail-address" element={<InputDetailAddress />} />
              <Route path="sign-up" element={<InputUser />} />
            </Route>
          </>
          {/* )} */}
          {/* {token && isLoggedIn && ( */}
          <>
            <Route exact path="user">
              <Route exact path=":id" element={<User />} />
              <Route exact path=":id/followers" element={<Follows />} />
              <Route exact path=":id/followings" element={<Follows />} />
              <Route
                exact
                path=":id/report-histories"
                element={<Histories />}
              />
              <Route
                exact
                path=":id/review-histories"
                element={<Histories />}
              />
              <Route exact path="edit">
                <Route path="menu" element={<EditUserMenu />} />
                <Route path="email" element={<InputEmail />} />
                <Route path="address" element={<InputAddress />} />
                <Route path="detail-address" element={<InputDetailAddress />} />
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
          {/* )} */}
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

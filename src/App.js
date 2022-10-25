/* libraries */
import React, { useEffect } from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom, loginToken } from './store';
/* components */
import {
  Header,
  Footer,
  PageContainer,
  OrderingModal,
  // pages
  CourseDetail,
  CourseRegistration,
  EmailValidation,
  ErrorPage,
  Follows,
  Histories,
  InputAddress,
  InputDetailAddress,
  Login,
  Main,
  NotFoundPage,
  SearchedCourses,
  SignUp,
  User,
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
  const [isLoggedIn] = useRecoilState(loginStateAtom);
  const [token] = useRecoilState(loginToken);

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
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/searched-courses" element={<SearchedCourses />} />
        </Route>
        <Route element={<WithoutHeaderAndFooter />}>
          {/* {!token && !isLoggedIn && ( */}
          <>
            <Route path="login" element={<Login />} />
            <Route path="email-validation" element={<EmailValidation />} />
            <Route path="address" element={<InputAddress />} />
            <Route path="detail-address" element={<InputDetailAddress />} />
            <Route path="sign-up" element={<SignUp />} />
          </>
          {/* )} */}
          {/* {token && isLoggedIn && ( */}
          <>
            <Route path="user">
              <Route path=":id" element={<User />} />
              <Route path=":id/followers" element={<Follows />} />
              <Route path=":id/followings" element={<Follows />} />
              <Route path=":id/report-histories" element={<Histories />} />
              <Route path=":id/review-histories" element={<Histories />} />
            </Route>

            <Route
              path="/course-registration"
              element={<CourseRegistration />}
            />
          </>
          {/* )} */}
        </Route>
        {/* Error Page */}
        <Route path="error" element={<ErrorPage />} />
        {/* 잘못된 경로에 접근시 메인 페이지로 리다이렉트 시킴*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;

/* libraries */
import React, { useEffect } from "react";
/* recoil */
import { useRecoilState } from "recoil";
import { loginStateAtom } from "./store";
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
  Follows,
  Histories,
  InputAddress,
  InputDetailAddress,
  Login,
  Main,
  SearchedCourses,
  SignUp,
  User,
} from "./components";
/* router */
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

const WithHeaderAndFooter = () => {
  const path = useLocation().pathname;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <OrderingModal path={path} />
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
  const loginToken = localStorage.getItem("token");

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
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/searched-courses" element={<SearchedCourses />} />
        </Route>
        <Route element={<WithoutHeaderAndFooter />}>
          {!loginToken && !isLoggedIn && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="email-validation" element={<EmailValidation />} />
              <Route path="address" element={<InputAddress />} />
              <Route path="detail-address" element={<InputDetailAddress />} />
              <Route path="sign-up" element={<SignUp />} />
            </>
          )}
          {/* {loginToken && isLoggedIn && ( */}
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
        {/* 잘못된 경로에 접근시 메인 페이지로 리다이렉트 시킴*/}
        {/* <Route path="*" element={<Navigate to={'/'} />} /> */}
      </Routes>
    </>
  );
}
export default App;

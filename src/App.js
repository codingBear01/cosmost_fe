import React, { useContext } from 'react';
/* context */
import { LoginStateContext } from './components/context';
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
} from './components';
/* router */
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';

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

function App() {
  const loginTokenState = useContext(LoginStateContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<Main />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/searched-courses" element={<SearchedCourses />} />
        </Route>
        <Route element={<WithoutHeaderAndFooter />}>
          {loginTokenState || (
            <>
              <Route path="login" element={<Login />} />
              <Route path="email-validation" element={<EmailValidation />} />
              <Route path="address" element={<InputAddress />} />
              <Route path="detail-address" element={<InputDetailAddress />} />
              <Route path="sign-up" element={<SignUp />} />
            </>
          )}
          {/* {loginTokenState && ( */}
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
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}
export default App;

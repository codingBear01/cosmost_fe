import React, { useState, useContext } from 'react';
/* context */
import { LoginStateContext } from './components/context';
/* components */
import {
  Header,
  Footer,
  UtilPageContainer,
  CourseRegisterPage,
  EmailValidPage,
  FollowPage,
  LocationDetailPage,
  LocationInfoPage,
  LoginPage,
  MainPage,
  HistoryPage,
  UserInfoPage,
  UserPage,
} from './components';
/* router */
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

const WithHeaderAndFooter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const WithoutHeaderAndFooter = () => {
  return (
    <>
      <UtilPageContainer>
        <Outlet />
      </UtilPageContainer>
    </>
  );
};

function App() {
  const loginTokenState = useContext(LoginStateContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<MainPage />} />
          <Route path="/course">
            <Route path="register" element={<CourseRegisterPage />} />
          </Route>
        </Route>
        <Route element={<WithoutHeaderAndFooter />}>
          {loginTokenState || (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="sign-up">
                <Route path="email-valid" element={<EmailValidPage />} />
                <Route path="location-info" element={<LocationInfoPage />} />
                <Route
                  path="location-detail"
                  element={<LocationDetailPage />}
                />
                <Route path="user-info" element={<UserInfoPage />} />
              </Route>
            </>
          )}
          {loginTokenState && (
            <Route path="user">
              <Route path=":id" element={<UserPage />} />
              <Route path=":id/followers" element={<FollowPage />} />
              <Route path=":id/followings" element={<FollowPage />} />
              <Route path=":id/report-histories" element={<HistoryPage />} />
              <Route path=":id/review-histories" element={<HistoryPage />} />
            </Route>
          )}
        </Route>
        {/* 잘못된 경로에 접근시 메인 페이지로 리다이렉트 시킴*/}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}
export default App;

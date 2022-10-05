import react, { useState, useContext } from "react";

/* context */
import { LoginStateContext } from "./components/context";
/* components */
import {
  Header,
  Footer,
  UtilPageContainer,
  CourseRegisterPage,
  EmailValidPage,
  LocationDetailPage,
  LocationInfoPage,
  LoginPage,
  MainPage,
  UserInfoPage,
  UserPage,
} from "./components";
/* router */
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
/* hooks */
import { GoToTop } from "./store";

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
        <Route path="/util" element={<WithoutHeaderAndFooter />}>
          {loginTokenState || (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="email-valid" element={<EmailValidPage />} />
              <Route path="location-info" element={<LocationInfoPage />} />
              <Route path="location-detail" element={<LocationDetailPage />} />
              <Route path="user-info" element={<UserInfoPage />} />
            </>
          )}
          {loginTokenState && <Route path="user/:id" element={<UserPage />} />}
        </Route>

        {/* 잘못된 경로에 접근시 메인 페이지로 리다이렉트 시킴*/}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}
export default App;

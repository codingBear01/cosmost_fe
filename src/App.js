import react, { useState } from "react";

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
import { Routes, Route, Outlet } from "react-router-dom";
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
  return (
    <LoginStateContext.Provider value={sessionStorage.getItem("token")}>
      <Routes>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<MainPage />} />
          <Route path="/course">
            <Route path="register" element={<CourseRegisterPage />} />
          </Route>
        </Route>

        <Route path="/util" element={<WithoutHeaderAndFooter />}>
          {/* isLogin = false */}
          <Route path="login" element={<LoginPage />} />
          <Route path="email-valid" element={<EmailValidPage />} />
          <Route path="location-info" element={<LocationInfoPage />} />
          <Route path="location-detail" element={<LocationDetailPage />} />
          <Route path="user-info" element={<UserInfoPage />} />
          {/* isLogin = true */}
          <Route path="user/:id" element={<UserPage />} />
        </Route>
      </Routes>
    </LoginStateContext.Provider>
  );
}
export default App;

/* components */
import {
  Header,
  Footer,
  CourseRegisterPage,
  EmailValidPage,
  LocationDetailPage,
  LocationInfoPage,
  LoginPage,
  MainPage,
  UserInfoPage,
  UtilPageContainer,
} from './components';
/* router */
import { Routes, Route, Outlet } from 'react-router-dom';
/* hooks */
import { GoToTop } from './store';

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
    <>
      <Routes>
        <Route path="/" element={<WithHeaderAndFooter />}>
          <Route index element={<MainPage />} />
          <Route path="/course">
            <Route path="register" element={<CourseRegisterPage />} />
          </Route>
        </Route>

        <Route path="/util" element={<WithoutHeaderAndFooter />}>
          <Route exact path="login" element={<LoginPage />} />
          <Route path="email-valid" element={<EmailValidPage />} />
          <Route path="location-info" element={<LocationInfoPage />} />
          <Route path="location-detail" element={<LocationDetailPage />} />
          <Route path="user-info" element={<UserInfoPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;

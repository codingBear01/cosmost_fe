/* components */
import {
  Header,
  Footer,
  CourseRegisterPage,
  EmailValidPage,
  LoginPage,
  MainPage,
  UtilPage,
  UtilPageContainer,
} from './components';
/* router */
import { Routes, Route, Outlet } from 'react-router-dom';
/* hooks */
import { GoToTop } from './store';
import {} from '.';

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
        </Route>
      </Routes>
    </>
  );
}
export default App;

/* components */
import {
  Header,
  Footer,
  CourseRegisterPage,
  LoginPage,
  MainPage,
  UtilPage,
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

        <Route path="/util" element={<UtilPage />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;

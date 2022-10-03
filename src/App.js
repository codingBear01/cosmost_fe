/* components */
import { Header, Footer, CourseRegisterPage, MainPage } from './components';
/* router */
import { Routes, Route } from 'react-router-dom';
/* hooks */
import { GoToTop } from './store';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/course">
          <Route path="register" element={<CourseRegisterPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;

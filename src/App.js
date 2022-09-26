import { CourseRegisterPage, MainPage, LoginPage } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/course">
        <Route path="register" element={<CourseRegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import {
  AgreementPage,
  CourseRegisterPage,
  MainPage,
  LoginPage,
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/course">
        <Route path="register" element={<CourseRegisterPage />} />
      </Route>
      <Route path="/register/agreement" element={<AgreementPage />} />
    </Routes>
  );
}
export default App;

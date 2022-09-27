import {
  AgreementPage,
  CourseRegisterPage,
  MainPage,
  LoginPage,
  SignUpPage,
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
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/signup/agreement" element={<AgreementPage />} />
    </Routes>
  );
}
export default App;

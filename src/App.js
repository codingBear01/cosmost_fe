import {
  AgreementPage,
  CouresDetailPage,
  CourseRegisterPage,
  LoginPage,
  SignUpPage,
  MainPage,
  SearchResultPage,
  UserPage,
} from "./components";
import { Routes, Route } from "react-router-dom";
import { GoToTop } from "./store";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register/agreement" element={<AgreementPage />} />
      <Route path="/course">
        <Route path="register" element={<CourseRegisterPage />} />
        <Route path="result" element={<SearchResultPage />} />
        <Route path="detail" element={<CouresDetailPage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/agreement" element={<AgreementPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}
export default App;

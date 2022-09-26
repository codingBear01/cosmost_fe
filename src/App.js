import { AgreementPage, MainPage } from "./components";
import { LoginPage } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register/agreement" element={<AgreementPage />} />
    </Routes>
  );
}
export default App;

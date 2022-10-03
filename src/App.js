/* components */
import { Header, Footer, MainPage } from './components';
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
      </Routes>
      <Footer />
    </>
  );
}
export default App;

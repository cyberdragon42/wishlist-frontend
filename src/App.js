import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import CategoriesPage from "./components/CategoriesPage"
import MainPage from './components/MainPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
        <Navbar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

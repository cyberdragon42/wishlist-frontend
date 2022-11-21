import './App.scss';
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";

import Menu from './components/Menu';
import CategoriesPage from "./components/Categories/CategoriesPage"
import MainPage from './components/MainPage';
import CurrenciesPage from './components/Currencies/CurrenciesPage';
import CategoryDetails from './components/Categories/CategoryDetails';
import EditCategory from './components/Categories/EditCategory';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<Outlet />}>
            <Route index element={<CategoriesPage />} />
            <Route path="edit/:id" element={<EditCategory />} />
            <Route path="details/:id" element={<CategoryDetails />} />
          </Route>
          <Route path="currencies" element={<CurrenciesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

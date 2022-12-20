import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import AddMaterialPage from './pages/AddMaterialPage';

function App() {
  return (
    <div>
      
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<AdminPage/>} />
        <Route path="add-material" element={<AddMaterialPage />} />
      </Routes>
    </div>
  );
}

export default App;

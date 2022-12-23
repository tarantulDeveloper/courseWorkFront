import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";

import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import AddMaterialPage from "./pages/AddMaterialPage";
import CategoryPage from "./pages/CategoryPage";
import WorkersList from "./pages/WorkersList";
import OrdersPage from "./pages/OrdersPage";

function App() {



  return (
    <div>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route
            path="shop"
            element={
              <Shop/>
            }
          />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="admin" element={<AdminPage/>}/>
          <Route path="add-material" element={<AddMaterialPage/>}/>
          <Route path="add-category" element={<CategoryPage/>}/>
          <Route path="workers" element={<WorkersList/>}/>
          <Route path="orders" element={<OrdersPage />} />
        </Routes>

    </div>
  );
}

export default App;

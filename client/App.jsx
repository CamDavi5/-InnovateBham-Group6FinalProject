import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx";
<<<<<<< HEAD
import Details from "./pages/details.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
=======
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Categories from "./pages/Categories.jsx";
import ItemsDetails from "./pages/Details.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/ItemsDetails" element={<ItemsDetails />} />
        </Routes>
    </BrowserRouter>
  );
>>>>>>> 25837a0629f77535b3a06d3f88d03446e84b3319
};

export default App;

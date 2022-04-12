import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Categories from "./pages/Categories.jsx";
import Details from "./pages/details.jsx";
import Team from "./pages/Team.jsx";
import Contactus from "./pages/Contactus.jsx";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx";
// import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Categories from "./pages/Categories.jsx";
import Details from "./pages/details.jsx";
import Team from "./pages/Team.jsx";
import Appliances from "./pages/Appliances.jsx"
import Contactus from "./pages/Contactus.jsx";
// import Profile4 from "./pages/Profile4.jsx";
import Profile7 from "./pages/Profile7.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile/:id" element={<Profile7 />} />
          {/* <Route path="/Profile/:id" element={<Profile />} /> */}
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Categories/Appliances" element={<Appliances />} />
          <Route path="/Categories/:typeofcat/:itemid" element={<Details />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

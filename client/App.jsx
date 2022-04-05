import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Categories from "./pages/Categories.jsx";
import ItemsDetails from "./pages/ItemsDetails";

const App = () => {
    return (
       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Categories" element={<Categories />} />
                <Route path="/ItemsDetails" element={<ItemsDetails />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
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
};

export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <>
        <h1>Hello World</h1>
        </>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //     </Routes>
        // </BrowserRouter>
    )
};

export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "./details.css"
const Details = () => {
    return (
        <>
        

            <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">

                    </p>
                </div>
           </div>
        <div className="container2 test d-flex justify-content-bottom align-items-center flex-column position-sticky">
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>          
                    <p>It uses utility namees for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">

                    </p>
                </div>
        </div>

        </>
    )




};

export default Details;
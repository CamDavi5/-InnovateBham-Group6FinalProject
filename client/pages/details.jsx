import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "./details.css"
const Details = () => {
    return (
        <>
        

            <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                <div className="jumbotron detailCard">
                    <h1 className="display-4">Lorem Ipsum</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis facilis error ipsam placeat labore, aperiam quia.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">

                    </p>
                </div>
           </div>
        <div className="container2 test d-flex justify-content-center align-items-center flex-column position-">
                <div className="jumbotron">
                    <h1 className="display-4">Lorem ipsum</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis facilis error ipsam placeat labore, aperiam quia.</p>          
                    <p>It uses utility namees for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">

                    </p>
                </div>
        </div>

        </>
    )




};

export default Details;
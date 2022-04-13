import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="cat-container">
        <div className="row">
          <div className="col-6 text-center">
            <div className="card">
              <img src="../assets/carphoto.webp" className="card-img-top2"></img>
              <div className="card-body">
                <h5 className="card-title">Vehicles</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/Categories/Appliances" className="btn btn-warning">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="card">
              <img src="../assets/appphoto.jpg" className="card-img-top2"></img>
              <div className="card-body">
                <h5 className="card-title">Home Appliances</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/Categories/Appliances" className="btn btn-warning">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;

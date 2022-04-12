import React from "react";


function Categories () {
  return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Categories</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              Cars
              <img src="../assets/car-1.jpg"className="image"></img>
            </div>
            <div className="col-sm-12 col-md-6">
              Household appliances
              <img src="../assets/car-1.jpg" className="image"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src="../assets/car-1.jpg" className="image"></img>
            </div>
            <div className="col-sm-12 col-md-6">
              Column 4
              <img src="../assets/car-1.jpg" className="image"></img>
            </div>
          </div>
        </div>
      </main>
    );
  }

  export default Categories;
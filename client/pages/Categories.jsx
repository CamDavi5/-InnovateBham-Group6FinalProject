export default function Categories() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Categories</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              Cars
              <img src="./car-1.jpg" className="image"></img>
            </div>
            <div className="col-sm-12 col-md-6">
              Household appliances
              <img src="./car-2.jpg" className="image"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img src="./car-3.jpg" className="image"></img>
            </div>
            <div className="col-sm-12 col-md-6">
              Column 4
              <img src="./car-4.jpg" className="image"></img>
            </div>
          </div>
        </div>
      </main>
    );
  }
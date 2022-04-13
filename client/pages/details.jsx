import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const [itemDetails, setItemDetails] = useState([]);

  const { typeofcat, itemid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeofcat == "Appliances") {
      fetchItem(
        `https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallID=${itemid}`
      );
    }
    /*else if (typeofcat == 'Ford' || typeofcat == 'MercedesBenz' || typeofcat == 'Honda' ) {
            fetchItem();
        }*/
  }, []);

  const fetchItem = (url) => {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((item) => {
        setItemDetails(item);
      });
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      {typeofcat == "Appliances" && (
        <>
          <div className="relative justify-content-center align-items-center">
            <div>
              <div id="detailCard" className="jumbotron">
                <img
                  className="rounded mx-auto d-block"
                  src={itemDetails.length > 0 && itemDetails[0].Images[0].URL}
                  alt="Image Unavailable"
                  width="300"
                  height="300"
                ></img>
                <h1 className="">
                  {itemDetails.length > 0 && itemDetails[0].Products[0].Name}
                </h1>
                <p className="lead">
                  Recall Date:{" "}
                  {itemDetails.length > 0 && itemDetails[0].RecallDate}
                </p>
                <button className="btn btn-info" onClick={() => navigateBack()}>
                  Go Back
                </button>
              </div>
            </div>
          </div>
          <div className="relative justify-content-center align-items-center">
            <div className="jumbotron" id="detailCard3">
              <h3 className="">Description and Hazards</h3>
              <p className="lead">
                {itemDetails.length > 0 && itemDetails[0].Description}{" "}
                {itemDetails.length > 0 && itemDetails[0].Hazards[0].Name}
              </p>
              <p className="lead" />
            </div>
          </div>
          <div className="relative justify-content-center align-items-center">
            <div className="jumbotron" id="detailCard2">
              <h3 className="">Remedies and Contact Info</h3>
              <p className="lead">
                {itemDetails.length > 0 && itemDetails[0].Remedies[0].Name}{" "}
                {itemDetails.length > 0 && itemDetails[0].ConsumerContact}
              </p>
              <p className="lead" />
            </div>
          </div>
          <div className="relative justify-content-center align-items-center">
            <div className="jumbotron" id="detailCard4">
              <h3 className="">User Recommendations</h3>
              <p className="lead">Lorem ipsum</p>
              <p></p>
              <p className="lead" />
            </div>
          </div>
          <div className="product">
            <h5>Component</h5>
            <h5>00/00/00</h5>
          </div>
        </>
      )}
    </>
  );
};

export default Details;

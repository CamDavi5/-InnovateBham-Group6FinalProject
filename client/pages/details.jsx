import React, { useState, useEffect } from 'react';

const Details = () => {
    const [itemDetails, setItemDetails] = useState([]);
    
    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = () => {
        fetch('https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallID=9278')
          .then(response => {
            console.log(response);
            return response.json();
          })
          .then(item => {
            setItemDetails(item);
          });
      }

    return (
        <>



            <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                <div>
                    <div id='detailCard' className="jumbotron">
                    <img className="rounded mx-auto d-block" src={itemDetails.length > 0 && itemDetails[0].Images[0].URL} alt="Image Unavailable" width="300" height="300"></img>
                        <h1 className="">{itemDetails.length > 0 && itemDetails[0].Products[0].Name}</h1>
                        <p className="lead">{itemDetails.length > 0 && itemDetails[0].RecallDate}</p>
                    </div>

                </div>
            </div>
            <div className="container2 test d-flex justify-content-center align-items-center flex-column ">
                <div className="jumbotron" id="detailCard3">
                    <h3 className="">Description and Hazards</h3>
                    <p className="lead">{itemDetails.length > 0 && itemDetails[0].Description} {itemDetails.length > 0 && itemDetails[0].Hazards[0].Name}</p>
                    <p className="lead" />

                </div>
            </div>
            <div className="container3 test d-flex justify-content-center align-items-center flex-column position-">
                <div className="jumbotron" id="detailCard2">
                    <h3 className="">Remedies and Contact Info</h3>
                    <p className="lead">{itemDetails.length > 0 && itemDetails[0].Remedies[0].Name} {itemDetails.length > 0 && itemDetails[0].ConsumerContact}</p>
                    <p className="lead" />
                </div>
            </div>
            <div className="container4 test d-flex justify-content-center align-items-center flex-column position-">
                <div className="jumbotron" id="detailCard4">
                    <h3 className="">User Recommendations</h3>
                    <p className="lead">Lorem ipsum</p>
                    <p></p>
                    <p className="lead" />
                </div>
            </div>
            <div className='product'>
                <h5>Component</h5>
                <h5>00/00/00</h5>
            </div>
        </>

    );
}

export default Details;
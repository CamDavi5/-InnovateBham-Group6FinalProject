import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {

  const [itemDetails, setItemDetails] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState([]);
  const [loadingBool, setLoadingBool] = useState(false);


  const { typeofcat, itemid } = useParams();
  const navigate = useNavigate();

    useEffect(() => {
        if (typeofcat == 'Appliances') {
            fetchItem(`https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallID=${itemid}`);
        }
        else if (typeofcat == 'Ford' || typeofcat == 'Mercedes' || typeofcat == 'Honda' ) {
            fetchVehicle(`/api/ahh/vehicle/${itemid}`);
        }
    }, [])

    const fetchItem = (url) => {
        fetch(url)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(item => {
                setItemDetails(item);
                console.log(itemDetails);
                setLoadingBool(true);
            });
    }

    const fetchVehicle = (url) => {
        fetch(url)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(vehicle => {
                setVehicleDetails([...vehicleDetails, vehicle]);
                console.log(vehicleDetails);
                setLoadingBool(true);
            });
    }

    const navigateBack = () => {
        navigate(-1);
    }


  return (
    <>
            {loadingBool == false &&
                <h1>Sorry, currently loading</h1>
            }
            {typeofcat == 'Appliances' && loadingBool == true &&
                <>
                    <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                        <div>
                            <div id='detailCard' className="jumbotron">
                                <img className="rounded mx-auto d-block" src={itemDetails.length > 0 && itemDetails[0].Images[0].URL} alt="Image Unavailable" width="300" height="300"></img>
                                <h1 className="">{itemDetails.length > 0 && itemDetails[0].Products[0].Name}</h1>
                                <p className="lead">Recall Date: {itemDetails.length > 0 && itemDetails[0].RecallDate}</p>
                                <button className="btn btn-info" onClick={() => navigateBack()} >Go Back</button>
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
                </>
            }

            {typeofcat == 'Ford' && loadingBool == true &&
                <>
                <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                        <div>
                            <div id='detailCard' className="jumbotron">
                                <img className="rounded mx-auto d-block" src='../../assets/ford-logo.png' alt="Image Unavailable"></img>
                                <h1 className="">{vehicleDetails[0].results[0].Component}</h1>
                                <p className="lead">Recall Date: {vehicleDetails[0].results[0].ReportReceivedDate}</p>
                                <button className="btn btn-info" onClick={() => navigateBack()} >Go Back</button>
                            </div>

                        </div>
                    </div>
                    <div className="container2 test d-flex justify-content-center align-items-center flex-column ">
                        <div className="jumbotron" id="detailCard3">
                            <h3 className="">Description and Hazards</h3>
                            <p className="lead">{vehicleDetails[0].results[0].Summary} {vehicleDetails[0].results[0].Consequence}</p>
                            <p className="lead" />

                        </div>
                    </div>
                    <div className="container3 test d-flex justify-content-center align-items-center flex-column position-">
                        <div className="jumbotron" id="detailCard2">
                            <h3 className="">Remedies and Contact Info</h3>
                            <p className="lead">{vehicleDetails[0].results[0].Remedy} {vehicleDetails[0].results[0].Notes}</p>
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
                </>
            }

            {typeofcat == 'Honda' && loadingBool == true &&
                <>
                <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                        <div>
                            <div id='detailCard' className="jumbotron">
                                <img className="rounded mx-auto d-block" src='../../assets/honda-logo.jpg' alt="Image Unavailable"></img>
                                <h1 className="">{vehicleDetails[0].results[0].Component}</h1>
                                <p className="lead">Recall Date: {vehicleDetails[0].results[0].ReportReceivedDate}</p>
                                <button className="btn btn-info" onClick={() => navigateBack()} >Go Back</button>
                            </div>

                        </div>
                    </div>
                    <div className="container2 test d-flex justify-content-center align-items-center flex-column ">
                        <div className="jumbotron" id="detailCard3">
                            <h3 className="">Description and Hazards</h3>
                            <p className="lead">{vehicleDetails[0].results[0].Summary} {vehicleDetails[0].results[0].Consequence}</p>
                            <p className="lead" />

                        </div>
                    </div>
                    <div className="container3 test d-flex justify-content-center align-items-center flex-column position-">
                        <div className="jumbotron" id="detailCard2">
                            <h3 className="">Remedies and Contact Info</h3>
                            <p className="lead">{vehicleDetails[0].results[0].Remedy} {vehicleDetails[0].results[0].Notes}</p>
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
                </>
            }

            {typeofcat == 'Mercedes' && loadingBool == true &&
                <>
                <div className="container test d-flex justify-content-center align-items-center flex-column push-to-bottom">
                        <div>
                            <div id='detailCard' className="jumbotron">
                                <img className="rounded mx-auto d-block" src='../../assets/mercedes-logo.jpg' alt="Image Unavailable"></img>
                                <h1 className="">{vehicleDetails[0].results[0].Component}</h1>
                                <p className="lead">Recall Date: {vehicleDetails[0].results[0].ReportReceivedDate}</p>
                                <button className="btn btn-info" onClick={() => navigateBack()} >Go Back</button>
                            </div>

                        </div>
                    </div>
                    <div className="container2 test d-flex justify-content-center align-items-center flex-column ">
                        <div className="jumbotron" id="detailCard3">
                            <h3 className="">Description and Hazards</h3>
                            <p className="lead">{vehicleDetails[0].results[0].Summary} {vehicleDetails[0].results[0].Consequence}</p>
                            <p className="lead" />

                        </div>
                    </div>
                    <div className="container3 test d-flex justify-content-center align-items-center flex-column position-">
                        <div className="jumbotron" id="detailCard2">
                            <h3 className="">Remedies and Contact Info</h3>
                            <p className="lead">{vehicleDetails[0].results[0].Remedy} {vehicleDetails[0].results[0].Notes}</p>
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
                </>
            }
        </>
  );
};

export default Details;

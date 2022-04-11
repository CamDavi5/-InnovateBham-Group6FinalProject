import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [savedTitle,setSavedTitle] = useState("");
  const [savedLink, setSavedLink] = useState("");
  const [savedHazard,SetSavedHazard] = useState("");
  const [savedImage, setSavedImage] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/api/user/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {
          setUsername(json[0].username)
          setEmail(json[0].email)
          setBirthdate(json[0].birthdate)
          setPassword(json[0].password)
          // console.log(json[0]);
        });
      }
    }, []);
  })

  useEffect(() => {
    fetch(`http://localhost:3000/api/suggestions/${id}`, {

      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {
          let itemid = json[0].CPSCid;
          console.log(itemid)
          console.log(json[0]);
          fetch(`https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallID=${itemid}`)
          .then(response => {
            if (response.ok) {
              response.json().then(json => {
                 console.log(json[0])
                 setSavedTitle(json[0].Title)
                 setSavedLink(json[0].URL)
                 SetSavedHazard(json[0].Hazards[0].Name)
                 setSavedImage(json[0].Images[0].URL)
                 console.log(json[0].Images.URL)
              });
            } else{
              console.log(error);
            }
          
          })
        });
      }
    })
  })
 
    return (
      <>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container justify-content-center">
              <div className="col-12 ">
                <div className="card user-card-full">
                  <div className="row">
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                      <div className="card-block text-center text-white">
                        <div>
                          {" "}
                          <img
                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                            className="img-radius"
                            alt="User-Profile-Image"
                          />{" "}
                        </div>
                        <h6 className="f-w-600"><br></br>Welcome User <br></br> {username} </h6>
                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="card-block">
                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Email</p>
                            <h6 className="text-muted f-w-400">
                              {email}
                            </h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Password</p>
                            <h6 className="text-muted f-w-400"> ****************</h6>
                            {/* <h6 className="text-muted f-w-400"> {password}</h6> */}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Birthday</p>
                            <h6 className="text-muted f-w-400">{birthdate}</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Mobile Number</p>
                            <h6 className="text-muted f-w-400">
                              888-888-8888
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-3 text-center">Saved Items</h2>
          <div class="card text-center w-50 mx-auto">
            <div class="card-header">
              Featured
            </div>
            <div>
            <img class="card-img-top mw-50"  src={savedImage} alt="Card image cap"></img>
            </div>
            <div class="card-body">
              <h5 class="card-title">{savedTitle}</h5>
              <p class="card-text">Hazard: {savedHazard}</p>
              <a href={savedLink} class="btn btn-primary">Learn More</a>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>




        </div>
      </>
    );
  };

  export default Profile;

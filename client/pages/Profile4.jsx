import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, TumblrShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon, TumblrIcon, EmailIcon } from "react-share";
import SavedItemCard from "../components/savedItem.jsx";

const Profile4 = () => {
    let { id } = useParams();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    // const [savedTitle, setSavedTitle] = useState("");
    // const [savedLink, setSavedLink] = useState("");
    // const [savedHazard, SetSavedHazard] = useState("");
    // const [savedImage, setSavedImage] = useState();
    const [itemCards, setItemCards] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/user/3`, {
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
        fetch(`http://localhost:3000/api/saveditems/${id}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        },
        ).then(response => {
            if (response.ok) {
                console.log(response)
                return response.json()
            }
        })
            .then(json => {
                console.log("test ", json)
                // loop over each item and fetch
              
                   json.forEach(item => {
                    fetch(`https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallID=${item.CPSCid}`)
                        .then(response => {
                            // console.log(response);
                            if (response.ok) {

                                response.json().then(json => {
                                    console.log("test2", json)

                                    setItemCards([...itemCards,
                                    {
                                        Image: json[0].Images[0].URL,
                                        Title: json[0].Title,
                                        Hazards: json[0].Hazards[0].Name,
                                        Link: json[0].URL

                                    }])
                                    // }
                                    //console.log(setItemCards);
                                });
                            } else {
                                console.log(error);
                            }
                            
                        })
                       
                })
            });
    }, [])

    return (
        <>
            <div className="page-content page-container " id="page-content">
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
            {/* cards go here */}
            <h2 className="mt-3 text-center">Saved Items</h2>

            <div className=" chirps mb-4">

                {itemCards.map((itemCard) => {
                    return (<>
                        {/* <h1>TEST</h1> */}
                        <SavedItemCard
                            key={itemCard.id}
                            savedImage={itemCard.Image}
                            savedTitle={itemCard.Title}
                            savedHazard={itemCard.Hazards}
                            savedLink={itemCard.Link}

                        //dropdown with icons
                        />
                    </>)
                })}
            </div>


        </>
    );
};

export default Profile4;
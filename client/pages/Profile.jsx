import React from "react";

const Profile = () => {
  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container justify-content-center">
            <div className="col-12">
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
                      <h6 className="f-w-600">First/Last Name</h6>
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
                            user@email.com
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Password</p>
                          <h6 className="text-muted f-w-400">****************</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Birthdate</p>
                          <h6 className="text-muted f-w-400">00/00/0000</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Moblie Number</p>
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
    </>
  );
};

export default Profile;

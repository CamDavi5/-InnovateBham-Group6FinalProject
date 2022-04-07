import React, { useState } from "react";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // code for login form
  const renderForm = (
    <div className="form-container">
      <div className="title">Log In</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Username" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      {/* <div>
        <img id="img" src={"../assets/letssee.jpg"} />
      </div> */}
    </div>
  );
}

export default Login;
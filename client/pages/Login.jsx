import React, { useState, useEffect } from "react";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);

  /*// User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];*/

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    fetchUsers();
    //console.log(users);

    // Find user login info
    const userData = users.find((user) => user.username === uname.value);

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

  const fetchUsers = () => {
    fetch('http://localhost:3000/api/user')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(allUsers => {
        setUsers(allUsers);
      });
  }

  // Generate error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // code for login form
  const renderForm = (
    <div className="main-container">
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
        <button type="submit" value="Submit" className="btn btn-info btn-lg">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;

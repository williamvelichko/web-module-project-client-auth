import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import "./../styles/Login.css";

const userCredentials = {
  username: "",
  password: "",
};

function Login(props) {
  const [credentials, setCredentials] = useState(userCredentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        props.history.push("/friendlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <label>password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;

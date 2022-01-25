import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const userCredentials = {
  username: "",
  password: "",
};

function Login() {
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
        history.push("/friendlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </h1>
    </div>
  );
}

export default Login;

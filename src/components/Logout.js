import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

function Logout() {
  const { push } = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("token");
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>Loged out</div>;
}

export default Logout;

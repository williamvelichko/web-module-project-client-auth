import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function FriendsList() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    return axiosWithAuth()
      .get("/friends")
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
}

export default FriendsList;

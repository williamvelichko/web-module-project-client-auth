import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function FriendsList() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    return axiosWithAuth()
      .get("/friends")
      .then((resp) => {
        // console.log(resp);
        setFriendList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friendlist_container">
      <h2>Friend List</h2>
      {friendList.map((friend, idx) => {
        return (
          <h4>
            name: {friend.name}----email: {friend.email}
          </h4>
        );
      })}
    </div>
  );
}

export default FriendsList;

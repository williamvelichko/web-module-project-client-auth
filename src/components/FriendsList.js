import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import "./../styles/FriendList.css";
function FriendsList() {
  const [friendList, setFriendList] = useState([]);

  const handleDelete = () => {
    console.log("clicking");
  };

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
    <div className="friendlist_container" onSubmit={handleDelete}>
      <div>
        <h2>Friend List</h2>
      </div>
      {friendList.map((friend, idx) => {
        return (
          <div key={idx} className="friend">
            <h4>name: {friend.name}</h4> <h4>email: {friend.email}</h4>
            <h4>age: {friend.age}</h4>
            <button>Remove friend</button>
          </div>
        );
      })}
    </div>
  );
}

export default FriendsList;

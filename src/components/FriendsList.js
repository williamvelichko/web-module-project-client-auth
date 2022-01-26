import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

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
    <div className="friendlist_container">
      <h2>Friend List</h2>
      {friendList.map((friend, idx) => {
        return (
          <li key={idx}>
            name: {friend.name} -- email: {friend.email} -- age: {friend.age}
            <button onSubmit={handleDelete}>Remove friend</button>
          </li>
        );
      })}
    </div>
  );
}

export default FriendsList;

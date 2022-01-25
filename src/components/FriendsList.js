import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function FriendsList() {
  const [friendList, setFriendList] = useState([]);
  console.log(friendList);
  useEffect(() => {
    return axiosWithAuth()
      .get("/friends")
      .then((resp) => {
        // console.log(resp);
        setFriendList([...friendList, resp.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friendlist_container">
      <h2>Friend List</h2>
      {friendList.map((friend, idx) => {
        console.log(friend);

        return (
          <h4>
            {friend[0].name} {friend[0].email}
          </h4>
        );
      })}
    </div>
  );
}

export default FriendsList;

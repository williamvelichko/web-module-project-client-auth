import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import { useHistory } from "react-router-dom";

const newFriend = {
  name: "",
  email: "",
  age: "",
  //id: Math.random(""),
};

function AddFriend() {
  const [addFriend, setAddFriend] = useState(newFriend);
  const { push } = useHistory();
  const handleChange = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", addFriend)
      .then((resp) => {
        //console.log(resp);
        push("/friendlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Friend name:
          <input
            type="text"
            name="name"
            value={addFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Add Email:
          <input
            type="email"
            name="email"
            value={addFriend.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Add Age:
          <input
            type="number"
            name="age"
            value={addFriend.age}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Add Friend ID:
          <input
            type="number"
            name="id"
            value={addFriend.id}
            onChange={handleChange}
          />
        </label> */}
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;

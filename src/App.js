import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/Header.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

function App() {
  const isLoggedIn = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>FRIENDS DATABASE</h1>
          <div className="navbar">
            <h3>
              <Link to="/login">Login</Link>
            </h3>

            <h3>{isLoggedIn && <Link to="/friendlist">FriendList</Link>}</h3>

            <h3>{isLoggedIn && <Link to="/addfriend">AddFriend</Link>}</h3>

            <h3>
              <Link to="/logout">Logout</Link>
            </h3>
          </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/friendlist" component={FriendsList} />
          <PrivateRoute exact path="/addfriend" component={AddFriend} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

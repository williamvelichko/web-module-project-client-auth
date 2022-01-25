import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/Header.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>FRIENDS DATABASE</h1>

          <h3>
            <Link to="/login">Login</Link>
          </h3>
          <h3>
            <Link to="/friendlist">FriendList</Link>
          </h3>
          <h3>
            <Link to="/addfriend">AddFriend</Link>
          </h3>
          <h3>
            <Link to="/logout">Logout</Link>
          </h3>
        </div>
        <Switch>
          <Route exact path="/friendlist" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

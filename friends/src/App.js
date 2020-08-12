import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Form from "./Form";
import FriendsList from "./FriendsList";

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("token") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Form} />
          <PrivateRoute path="/home" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

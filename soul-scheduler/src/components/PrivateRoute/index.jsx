import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({component: Component, user, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      user ? (
        <Component />
      ) : (
        <Redirect to={{pathname: "/login", state: {from: props.location}}} />
      )
    }
  />
);

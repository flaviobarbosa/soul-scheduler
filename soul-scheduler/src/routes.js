import {Route, Switch, Redirect} from "react-router-dom";
import {useAuth} from "./hooks/useAuth";
import {Login} from "./pages/Login";

const PrivateRoute = ({component: Component, user, ...rest}) => (
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

const Home = () => <h1>user authenticated</h1>;

export const Routes = () => {
  const {user} = useAuth();

  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} user={user} />
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

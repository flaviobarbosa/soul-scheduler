import {Route, Switch, Redirect} from "react-router-dom";
import {Appointments} from "./components/Appointments";
import {Panel} from "./components/Panel";
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

const PrivateRoutes = () => {
  const {user} = useAuth();

  return (
    <Panel>
      <PrivateRoute path="/" exact component={Home} user={user} />
      <PrivateRoute path="/appointments" component={Appointments} user={user} />
    </Panel>
  );
};

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoutes />
    </Switch>
  );
};

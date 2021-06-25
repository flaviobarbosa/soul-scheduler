import {useState, createContext} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const history = useHistory();

  const [user, setUser] = useState();

  const signIn = (email, password) => {
    setUser({
      name: "Zeca",
      id: new Date().getTime(),
      email: email,
    });

    history.push("/appointments");
  };

  return <AuthContext.Provider value={{user, signIn}}>{children}</AuthContext.Provider>;
};

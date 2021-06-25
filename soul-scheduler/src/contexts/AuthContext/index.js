import {useState, createContext} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const history = useHistory();

  const [user, setUser] = useState();

  const signIn = () => {
    setUser({
      name: "Zeca",
      id: 1,
    });

    history.push("/appointments");
  };

  return <AuthContext.Provider value={{user, signIn}}>{children}</AuthContext.Provider>;
};

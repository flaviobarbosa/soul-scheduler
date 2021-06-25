import {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  const signIn = () => {
    console.debug("login");
    setUser({
      name: "Zeca",
      id: 1,
    });
  };

  return <AuthContext.Provider value={{user, signIn}}>{children}</AuthContext.Provider>;
};

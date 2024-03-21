import React, { useState } from "react";

export const AuthContext = React.createContext({
  loggedInUser: null,
  setLoggedInUser: () => {},
});

const AuthProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

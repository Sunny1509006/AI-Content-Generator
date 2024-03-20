import React, { useState } from "react";

export const AuthContext = React.createContext({
  hashValue: null,
  captchaUrl: null,
  loginData: null,
  setHashValue: () => {},
  fetchCaptcha: () => {},
  setCaptchaUrl: () => {},
  setLoginData: () => {},
});

const AuthProvider = (props) => {
  const [loginData, setLoginData] = useState({});

  return (
    <AuthContext.Provider
      value={{
        loginData,
        setLoginData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

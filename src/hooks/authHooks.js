import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const useAuth = () => {
  const { loginData, setLoginData } = useContext(AuthContext);

  return {
    loginData,
    setLoginData,
  };
};

export default useAuth;

import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "../Components/Axios";
import Cookies from "universal-cookie";
import { BEARER_TOKEN_COOKIE_NAME } from "../utils/constants";

const useAuth = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const fetchAuthUser = () => {
    const cookies = new Cookies(null, { path: "/" });
    const authToken = cookies.get(BEARER_TOKEN_COOKIE_NAME);

    if (!!authToken) {
      setIsAuthenticating(true);

      axios
        .get("/api/users/me")
        .then((response) => {
          const user = response?.data;

          if (!!user) {
            setLoggedInUser({
              id: user?.id,
              email: user?.email,
              mobile: user?.mobile,
              name: user?.name,
              username: user?.username,
              image: user?.image,
              package: user?.package,
              token: user?.token,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsAuthenticating(false);
        });
    } else {
      setIsAuthenticating(false);
    }
  };

  return {
    loggedInUser,
    setLoggedInUser,
    fetchAuthUser,
    isAuthenticating,
  };
};

export default useAuth;

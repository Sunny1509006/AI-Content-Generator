import { logout } from "../utils/authHelpers";
import useAuth from "./authHooks";
import { useNavigate } from "react-router-dom";
import axios from "../Components/Axios";
import { useState } from "react";

const useLogout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { setLoggedInUser } = useAuth();
  const navigate = useNavigate();

  const logoutUser = (onLogout = () => {}) => {
    setIsLoggingOut(true);

    axios
      .get("/api/users/logout")
      .then(() => {
        logout(
          () => {
            setLoggedInUser(null);
          },
          () => {
            navigate("/login");
            onLogout();
          }
        );
      })
      .catch(() => {
        logout(
          () => {
            setLoggedInUser(null);
          },
          () => {
            navigate("/login");
            onLogout();
          }
        );
      })
      .finally(() => {
        setIsLoggingOut(false);
      });
  };

  return { logoutUser, isLoggingOut };
};

export default useLogout;

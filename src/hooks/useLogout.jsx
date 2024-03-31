import { logout } from "../utils/authHelpers";
import useAuth from "./authHooks";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setLoggedInUser } = useAuth();
  const navigate = useNavigate();

  const logoutUser = (onLogout = () => {}) => {
    logout(
      () => {
        setLoggedInUser(null);
      },
      () => {
        navigate("/login");
        onLogout();
      }
    );
  };

  return { logoutUser };
};

export default useLogout;

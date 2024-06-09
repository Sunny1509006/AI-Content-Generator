import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useChangePassword = ({ onSuccess, onEnd }) => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const { logoutUser } = useLogout();

  const changePassword = ({
    userID,
    password,
    newPassword,
    confirmPassword,
  }) => {
    setIsChangingPassword(true);

    axios
      .put(`/api/users/${userID}/password`, {
        password,
        newPassword,
        confirmPassword,
      })
      .then((response) => {
        if (response?.status === 200) {
          if (!!onSuccess) {
            onSuccess();
          }
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsChangingPassword(false);

        if (!!onEnd) {
          onEnd();
        }
      });
  };

  return { changePassword, isChangingPassword };
};

export default useChangePassword;

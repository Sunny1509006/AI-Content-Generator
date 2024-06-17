import { useState } from "react";
import axios from "../Components/Axios";
import { useNavigate } from "react-router-dom";

const useResetPasssword = () => {
  const [isSettingPassword, setIsSettingPassword] = useState(false);
  const navigate = useNavigate();

  const resetPassword = ({ hash, newPassword, confirmPassword }) => {
    setIsSettingPassword(true);

    axios
      .put("/api/users/password/reset", {
        hash,
        newPassword,
        confirmPassword,
      })
      .then((response) => {
        if (response?.status === 200) {
          navigate("/login");
        }
      })
      .finally(() => {
        setIsSettingPassword(false);
      });
  };

  return { resetPassword, isSettingPassword };
};

export default useResetPasssword;

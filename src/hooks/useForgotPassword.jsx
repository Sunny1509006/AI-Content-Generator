import { useState } from "react";
import axios from "../Components/Axios";

const useForgotPassword = () => {
  const [isSendingResetLink, setIsSendingResetLink] = useState(false);

  const sendPasswordResetLink = ({ email, onSuccess }) => {
    setIsSendingResetLink(true);

    axios
      .post("/api/users/password/forgot", {
        email,
      })
      .then((response) => {
        if (response?.status === 201) {
          if (onSuccess) {
            onSuccess();
          }
        }
      })
      .finally(() => {
        setIsSendingResetLink(false);
      });
  };

  return { sendPasswordResetLink, isSendingResetLink };
};

export default useForgotPassword;

import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useUploadProfilePicture = ({ userID }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { logoutUser } = useLogout();

  const uploadProfilePicture = (pictureFile, onSuccess = () => {}) => {
    setIsUploading(true);

    const formData = new FormData();

    formData.append("profile", pictureFile);

    axios
      .post(`/api/users/${userID}/pic`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          onSuccess();
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request?.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  return { isUploading, uploadProfilePicture };
};

export default useUploadProfilePicture;

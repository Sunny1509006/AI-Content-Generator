import { useContext, useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";
import { AuthContext } from "../AuthProvider";

const useUpdateProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { logoutUser } = useLogout();

  const updateProfile = ({ name }, onSuccess = () => {}) => {
    setIsUpdating(true);

    axios
      .put(`/api/users/${loggedInUser?.id}`, {
        name,
      })
      .then((response) => {
        if (response.status === 201) {
          setLoggedInUser((user) => ({ ...user, name }));
          onSuccess();
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request?.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return { isUpdating, updateProfile };
};

export default useUpdateProfile;

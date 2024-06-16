import { useContext, useEffect, useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";
import { getPictureHrefFromBlob } from "../utils/getPictureHrefFromBlob";
import { AuthContext } from "../AuthProvider";

const useFetchProfilePicture = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  const fetchProfilePicture = () => {
    setIsFetching(true);

    axios
      .get(`/api/users/${loggedInUser?.id}/pic`, {
        responseType: "blob",
      })
      .then((response) => {
        if (response.status === 200) {
          const imageHref = getPictureHrefFromBlob(response.data);

          setLoggedInUser((user) => ({ ...user, profilePicture: imageHref }));
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request?.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    if (loggedInUser?.id && !loggedInUser?.profilePicture) {
      fetchProfilePicture();
    }
  }, [loggedInUser?.id, loggedInUser?.profilePicture]);

  return { isFetching, fetchProfilePicture };
};

export default useFetchProfilePicture;

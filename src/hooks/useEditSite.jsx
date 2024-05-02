import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useEditSite = ({ siteId, onSuccess, onEnd }) => {
  const [isUpdatingSite, setIsUpdatingSite] = useState(false);
  const { logoutUser } = useLogout();

  const editPublisherSite = ({ site, type, username }) => {
    setIsUpdatingSite(true);

    axios
      .put(`/api/sites/${siteId}`, {
        site,
        type,
        username,
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
        setIsUpdatingSite(false);

        if (!!onEnd) {
          onEnd();
        }
      });
  };

  return { editPublisherSite, isUpdatingSite };
};

export default useEditSite;

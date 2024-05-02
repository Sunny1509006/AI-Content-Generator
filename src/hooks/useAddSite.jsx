import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useAddSite = ({ onSuccess, onEnd }) => {
  const [isAddingSite, setIsAddingSite] = useState(false);
  const { logoutUser } = useLogout();

  const addPublisherSite = ({ site, type, siteUsername }) => {
    setIsAddingSite(true);

    axios
      .post("/api/sites", {
        site,
        type,
        username: siteUsername,
      })
      .then((response) => {
        if (response?.status === 201) {
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
        setIsAddingSite(false);

        if (!!onEnd) {
          onEnd();
        }
      });
  };

  return { addPublisherSite, isAddingSite };
};

export default useAddSite;

import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useFetchPublisherSites = (articleID) => {
  const [sites, setSites] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  const fetchSites = (type) => {
    setIsFetching(true);

    axios
      .get(`/api/sites`, {
        params: {
          type: type,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setSites(response.data?.sites || []);
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return { sites, fetchSites, isFetching };
};

export default useFetchPublisherSites;

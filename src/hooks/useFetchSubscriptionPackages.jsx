import { useEffect, useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useFetchSubscriptionPackages = () => {
  const [subscriptionPackages, setSubscriptionPackages] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  const fetchSubscriptionPackages = () => {
    setIsFetching(true);

    axios
      .get(`/api/price/get`)
      .then((response) => {
        if (response.status === 200) {
          setSubscriptionPackages(response.data?.result || []);
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

  useEffect(() => {
    fetchSubscriptionPackages();
  }, []);

  return { subscriptionPackages, fetchSubscriptionPackages, isFetching };
};

export default useFetchSubscriptionPackages;

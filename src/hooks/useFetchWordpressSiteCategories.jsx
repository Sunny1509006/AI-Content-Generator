import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useFetchWordpressSiteCategories = (articleID) => {
  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  const fetchCategories = ({ siteID, password }) => {
    setIsFetching(true);

    axios
      .post(`/api/sites/${siteID}/categories`, {
        site: siteID,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setCategories(response.data?.categories || []);
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

  return { categories, fetchCategories, isFetching, setCategories };
};

export default useFetchWordpressSiteCategories;

import { useCallback, useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";
import { debounce } from "@mui/material";

const useFetchSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  const fetchSuggestions = (keywords) => {
    setIsFetching(true);

    axios
      .post(`/api/articles/suggestion`, {
        keywords,
      })
      .then((response) => {
        if (response.status === 200) {
          setSuggestions(response.data?.suggestions);
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

  const debouncedFetcher = useCallback(debounce(fetchSuggestions, 500), []);

  return { suggestions, isFetching, fetchSuggestions: debouncedFetcher };
};

export default useFetchSuggestions;

import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  const fetchPosts = () => {
    setIsFetching(true);

    axios
      .get(`/api/articles`)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data?.result || []);
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

  return { posts, fetchPosts, isFetching };
};

export default useFetchPosts;

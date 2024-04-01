import { useEffect, useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useFetchArticle = (articleID) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const { logoutUser } = useLogout();

  useEffect(() => {
    setIsFetching(true);

    axios
      .get(`/api/articles/${articleID}`)
      .then((response) => {
        if (response.status === 200) {
          setTitle(response.data?.title);
          setContent(response.data?.content);
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
  }, [articleID]);

  return { title, content, isFetching };
};

export default useFetchArticle;

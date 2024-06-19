import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useGenerateBulkArticle = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [articles, setArticles] = useState([]);
  const { logoutUser } = useLogout();

  const generateBulkArticle = ({ payload }) => {
    setIsGenerating(true);

    axios
      .post("/api/articles", payload)
      .then((response) => {
        if (response?.status === 201) {
          setArticles(response?.data?.article_id);
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsGenerating(false);
      });
  };

  return { isGenerating, generateBulkArticle, articles };
};

export default useGenerateBulkArticle;

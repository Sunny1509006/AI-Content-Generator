import { useState } from "react";
import axios from "../Components/Axios";
import { useNavigate } from "react-router-dom";
import useLogout from "./useLogout";

const useGenerateArticle = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { logoutUser } = useLogout();
  const navigate = useNavigate();

  const generateArticle = ({ payload }) => {
    setIsGenerating(true);

    axios
      .post("/api/articles", payload)
      .then((response) => {
        const articleID = response.data?.article_id;

        if (response?.status === 201 && !!articleID) {
          navigate(`/articles/${articleID}`);
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

  return { isGenerating, generateArticle };
};

export default useGenerateArticle;

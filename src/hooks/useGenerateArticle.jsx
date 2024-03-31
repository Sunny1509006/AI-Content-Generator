import { useState } from "react";
import axios from "../Components/Axios";
import { useNavigate } from "react-router-dom";

const useGenerateArticle = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();

  const generateArticle = ({ payload }) => {
    setIsGenerating(true);

    axios
      .post("/api/articles", payload)
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          navigate("/login");
        }
      })
      .finally(() => {
        setIsGenerating(false);
      });
  };

  return { isGenerating, generateArticle };
};

export default useGenerateArticle;

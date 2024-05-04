import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useGenerateKeywords = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [keywords, setKeywords] = useState("");
  const { logoutUser } = useLogout();

  const generateKeywords = ({ topic }) => {
    setIsGenerating(true);

    axios
      .post("/api/articles/keyword", { topic })
      .then((response) => {
        setKeywords(response?.data?.result?.replaceAll(".", ""));
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

  return { isGenerating, generateKeywords, keywords };
};

export default useGenerateKeywords;

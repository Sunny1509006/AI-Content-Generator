import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useSaveArticle = (articleID) => {
  const [isSaving, setIsSaving] = useState(false);
  const { logoutUser } = useLogout();

  const saveArticle = ({ payload }) => {
    setIsSaving(true);

    axios
      .put(`/api/articles/${articleID}`, payload)
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  return { isSaving, saveArticle };
};

export default useSaveArticle;

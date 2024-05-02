import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const usePublishToSite = () => {
  const [isPublishing, setIsPublishing] = useState(false);
  const { logoutUser } = useLogout();

  const publisheArticleToSite = ({
    site,
    username,
    password,
    title,
    content,
  }) => {
    setIsPublishing(true);

    axios
      .post("/api/sites", { site, username, password, title, content })
      .then()
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsPublishing(false);
      });
  };

  return { publisheArticleToSite, isPublishing };
};

export default usePublishToSite;

import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";
import { enqueueSnackbar } from "notistack";

const usePublishToSite = ({ onEnd }) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const { logoutUser } = useLogout();

  const publisheArticleToSite = ({
    siteID,
    password,
    articleID,
    categoryIDs,
  }) => {
    setIsPublishing(true);

    axios
      .post(`/api/sites/${siteID}/publish`, {
        password,
        article_id: articleID,
        category: categoryIDs,
      })
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar("Your article has been successfully published!", {
            variant: "success",
          });
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }

        enqueueSnackbar("Something went wrong! Please, try again later.", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsPublishing(false);

        if (!!onEnd) {
          onEnd();
        }
      });
  };

  return { publisheArticleToSite, isPublishing };
};

export default usePublishToSite;

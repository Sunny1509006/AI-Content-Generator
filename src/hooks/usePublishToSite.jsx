import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";
import { enqueueSnackbar } from "notistack";

const usePublishToSite = ({ onEnd }) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const { logoutUser } = useLogout();

  const publisheArticleToSite = ({
    site,
    type,
    username,
    password,
    title,
    content,
  }) => {
    setIsPublishing(true);

    axios
      .post("/api/sites/publish", {
        site,
        type,
        username,
        password,
        title,
        content,
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

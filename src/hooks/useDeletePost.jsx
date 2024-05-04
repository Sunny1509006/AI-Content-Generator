import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useDeletePost = ({ articleID, onSuccessfullDeletion }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { logoutUser } = useLogout();

  const deleteSite = () => {
    setIsDeleting(true);

    axios
      .delete(`/api/articles/${articleID}`)
      .then((response) => {
        if (response.status === 200 && !!onSuccessfullDeletion) {
          onSuccessfullDeletion();
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return { deleteSite, isDeleting };
};

export default useDeletePost;

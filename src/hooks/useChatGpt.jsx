import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useChatGpt = () => {
  const [isSendingPrompt, setIsSendingPrompt] = useState(false);
  const { logoutUser } = useLogout();

  const sendPrompt = ({ query, model, onSuccess, onEnd }) => {
    setIsSendingPrompt(true);

    axios
      .post(
        "/api/gpt/",
        { query, model },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        if (response?.status === 200) {
          if (!!onSuccess) {
            onSuccess(response.data.response);
          }
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsSendingPrompt(false);

        if (!!onEnd) {
          onEnd();
        }
      });
  };

  return { sendPrompt, isSendingPrompt };
};

export default useChatGpt;

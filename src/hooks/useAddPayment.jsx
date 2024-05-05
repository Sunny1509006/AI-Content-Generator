import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useAddPayment = ({ onSuccess, onEnd }) => {
  const [isAddingPayment, setIsAddingPayment] = useState(false);
  const { logoutUser } = useLogout();

  const addPayment = ({
    packageID,
    userID,
    transactionID,
    transactionMethod,
  }) => {
    setIsAddingPayment(true);

    axios
      .post("/api/price/payment", {
        package_id: packageID,
        user_id: userID,
        transaction_id: transactionID,
        transaction_method: transactionMethod,
      })
      .then((response) => {
        if (response?.status === 201) {
          if (!!onSuccess) {
            onSuccess();
          }
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        }
      })
      .finally(() => {
        setIsAddingPayment(false);

        if (!!onEnd) {
          onEnd();
        }
      });
  };

  return { addPayment, isAddingPayment };
};

export default useAddPayment;

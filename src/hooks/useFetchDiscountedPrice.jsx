import { useState } from "react";
import axios from "../Components/Axios";
import useLogout from "./useLogout";

const useFetchDiscountedPrice = () => {
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [discountDecimal, setDiscountDecimal] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { logoutUser } = useLogout();

  const fetchDiscountedPrice = ({ couponCode, packageID }) => {
    setIsFetching(true);

    axios
      .get("/api/price/coupon", {
        params: {
          code: couponCode,
          package: packageID,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setDiscountedPrice(response.data.price);
          setDiscountDecimal(response.data.discountDecimal);
        }
      })
      .catch((error) => {
        if ([401, 423].includes(error.request.status)) {
          logoutUser();
        } else {
          setErrorMessage("Invalid Coupon Code");
        }
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return {
    discountedPrice,
    discountDecimal,
    errorMessage,
    setErrorMessage,
    fetchDiscountedPrice,
    isFetching,
  };
};

export default useFetchDiscountedPrice;

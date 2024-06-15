import { useState } from "react";
import axios from "../Components/Axios";

const useFetchOffers = () => {
  const [offers, setOffers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchOffers = () => {
    setIsFetching(true);

    axios
      .get(`/api/price/offer`)
      .then((response) => {
        if (response.status === 200) {
          setOffers(response.data?.offers || []);
        }
      })
      .catch((error) => {
        console.error("Couldn't fetch offers.");
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return { offers, fetchOffers, isFetching };
};

export default useFetchOffers;

import React, { useEffect } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import useFetchOffers from "../../hooks/useFetchOffers";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

const OfferCarousel = () => {
  const { offers, fetchOffers } = useFetchOffers();
  const appTheme = useTheme();

  useEffect(() => {
    fetchOffers();
  }, []);

  return offers?.length > 0 ? (
    <Box
      sx={{
        display: "inline-block",
        bgcolor: appTheme.palette.primary.main,
        color: "white",
        padding: "0 8px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          animation: `marquee ${offers?.length * 7}s linear infinite`,
          whiteSpace: "nowrap",
          ":hover": {
            animationPlayState: "paused",
          },
          "@keyframes marquee": {
            "0%": { transform: "translateX(100vw)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        {offers.map((offer) => (
          <Stack
            key={offer.id}
            direction="row"
            sx={{
              display: "inline-flex",
              whiteSpace: "nowrap",
              padding: "8px 24px",
              alignItems: "center",
            }}
          >
            <LocalOfferRoundedIcon
              sx={{ marginRight: "6px", fontSize: "20px" }}
            />{" "}
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {offer.offers}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  ) : null;
};

export default OfferCarousel;

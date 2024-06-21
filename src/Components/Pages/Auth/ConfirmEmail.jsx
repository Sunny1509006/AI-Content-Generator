import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../Axios";
import { Link } from "react-router-dom";
import { TbShieldCheck } from "react-icons/tb";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const ConfirmEmail = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { hash } = useParams();

  useEffect(() => {
    if (!!hash) {
      setIsConfirming(true);

      axios
        .put(`/api/users/confirm/${hash}`)
        .then((response) => {
          if (response.status === 200) {
            setIsConfirmed(true);
          }
        })
        .finally(() => {
          setIsConfirming(false);
        });
    }
  }, [hash]);

  console.log(hash);

  return (
    <Stack
      sx={{
        height: "calc(100vh - 350px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Helmet>
        <title>
          Confirm Your Mail 
        </title>
      </Helmet>
      {isConfirming && (
        <>
          <CircularProgress sx={{ color: "var(--primary-orange)" }} size={60} />
          <Typography sx={{ marginTop: "30px", fontSize: "24px" }}>
            Confirming the email!
          </Typography>
        </>
      )}
      {isConfirmed && (
        <>
          <TbShieldCheck
            style={{ color: "var(--primary-orange)", fontSize: "80px" }}
          />
          <Typography sx={{ marginTop: "30px", fontSize: "24px" }}>
            Your email has been confirmed!
          </Typography>
          <Typography sx={{ marginTop: "16px", fontSize: "18px" }}>
            Thanks for subscribing! Please, <Link to="/login">login</Link> to
            your account.
          </Typography>
        </>
      )}
    </Stack>
  );
};

export default ConfirmEmail;

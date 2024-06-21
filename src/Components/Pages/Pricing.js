import React, { useState, useEffect } from "react";
import "./Pricing.css";
import { Avatar, Button, Grid, Paper, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import axios from "../Axios";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import AppButton from "../Common/AppButton";

export const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  // console.log(articles);
  useEffect(() => {
    const loadPricing = async () => {
      const response = await axios.get("/api/price/get");
      console.log(response.data.result);
      setPricing(response.data.result);
    };

    loadPricing();
  }, []);

  return (
    <Grid
      className="login_up_dummy_div"
      style={{
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <Helmet>
        <title>Pricing</title>
      </Helmet>
      {pricing.map((eachPricing, index) => (
        <Paper
          elevation={20}
          key={index}
          style={{
            padding: "30px 20px",
            width: "27%",
            // margin: 'auto',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minWidth: "300px",
            minHeight: "450px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Grid align="center" className="login-icon-div">
              <h2>{eachPricing.plan}</h2>
            </Grid>
            <h2 style={{ color: "black" }}>
              $ {eachPricing.price} /{" "}
              <span style={{ color: "#445658" }}>{eachPricing.duration}</span>{" "}
            </h2>
            <div className="border-div"></div>
            <div>
              {eachPricing.desc1 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc1}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc2 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc2}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc3 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc3}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc4 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc4}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc5 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc5}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc6 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc6}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc7 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc7}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc8 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc8}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc9 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc9}</p>
                </div>
              ) : (
                <></>
              )}
              {eachPricing.desc10 ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <TbSquareRoundedCheckFilled
                    style={{ marginTop: "5px" }}
                    color="#FF4A17"
                  />
                  <p>{eachPricing.desc10}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <Stack>
            <AppButton
              variant="outlined"
              href={`/submit-manual-payment?packageID=${eachPricing.id}`}
            >
              Buy Now
            </AppButton>
          </Stack>
        </Paper>
      ))}
    </Grid>
  );
};

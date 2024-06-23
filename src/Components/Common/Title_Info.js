import "./Title_Info.css";
import { motion } from "framer-motion";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Title_Info = () => {
  const texts = [
    // {
    //   line1: "Compose a 1000-Word Article",
    //   line2: "With a Single Click!",
    // },
    // {
    //   line1: "Control Article Length By",
    //   line2: "Short, Medium & Long Format",
    // },
    {
      line1: "Info",
    },
    {
      line1: "Product Review",
    },
    {
      line1: "Blog",
    },
    {
      line1: "Amazon Review",
    },
    {
      line1: "Bulk",
    },
    {
      line1: "Backlinks",
    },
    {
      line1: "Content Rewrite",
    },
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}

        >
          <div className="title-info-main">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              {/* <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    
                  }}
                >
                  <p
                    style={{
                      fontSize: "50px",
                      // fontStyle: "italic",
                      fontWeight: "bold",
                      color: "#445658",
                    }}
                  >
                    Compose a 1000-Word <span style={{color: '#ff4a17'}}>{texts[currentTextIndex].line1}</span> Article
                  </p>
                  <p
                    style={{
                      fontSize: "30px",
                      fontStyle: "italic",
                      color: "#445658",
                    }}
                  >
                    {/* {texts[currentTextIndex].line2} */}
              {/* With a Single Click!

                  </p>
                  <p>
                  Control Article Length By Short, Medium & Long Format
                  </p>
                </div>
              </motion.span> */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ fontSize: "70px", fontWeight: "bold", color: "#445658" }}>
                  Compose a 1000-Word <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span style={{ color: '#ff4a17' }}>{texts[currentTextIndex].line1}</span>
                  </motion.span> Article
                </p>
                <p style={{ fontSize: "50px", fontStyle: "italic", color: "#445658" }}>
                  With a Single Click!
                </p>
                <p style={{marginTop: '30px', fontStyle: 'italic', fontSize: "30px"}}>
                  Control Article Length By Short, Medium & Long Format
                </p>
              </div>
            </div>
            <div
              className="button-div"
              style={{
                padding: "0 40px",
                marginTop: "20px",

              }}
            >
              <Link to="/info-article"><Button variant="contained" className="custom-button" >
                Start Free Trial
              </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

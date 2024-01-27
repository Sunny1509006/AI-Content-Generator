// import React from "react";
import "./Title_Info.css";
import { motion } from "framer-motion";

// export const Title_Info = () => {
//   return (
//     <div className="title-info-main">
//       <h1>Discover the Power of Affordable AI with Faisaliteb AI</h1>
//       <p>Welcome to faisaliteb.ai, your go-to destination for harnessing the power of affordable AI solutions. Our cutting-edge technology combines the prowess of advanced algorithms and machine learning to empower businesses with top-notch content generation and copyright generation tools. From our versatile 123-ai content writer to our magical text generators, we have everything you need to streamline your content creation process.</p>
//     </div>
//   );
// };

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
    {
      line1: "Compose a 1000-Word Article",
      line2: "With a Single Click!",
    },
    {
      line1: "Control Article Length By",
      line2: "Short, Medium & Long Format",
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
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
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
            {/* <h1>Discover the Power of Affordable AI with Faisaliteb AI</h1> */}
            {/* <h1 style={{ fontSize: "60px" }}>
              WELCOME TO <span style={{ color: "#FF4A17" }}>FAISALITEB.AI</span>
            </h1> */}
            {/* <div className="title-info-body">
            <div className="title-info-p-button">
              <p>
                Welcome to <span className="blue-color">faisaliteb.ai</span>,
                your go-to destination for harnessing the power of affordable AI
                solutions.<br /><br /> Our cutting-edge technology combines the prowess of
                advanced algorithms and machine learning to empower businesses
                with top-notch content generation and copyright generation
                tools.<br /><br /> From our versatile 123-ai content writer to our <span className="blue-color">magical
                text generators</span>, we have everything you need to streamline your
                content creation process.
              </p>
              <div className="button-div" style={{
                    padding: '0 40px',
                    marginTop: '20px',     
                }}>
                <Button variant="contained" className="custom-button" >
                  Start Free Trial
                </Button>
              </div>
            </div>
            <img src="/images/power_of_ai.jpg" />
          </div> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              <motion.span
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
                    {texts[currentTextIndex].line1}
                  </p>
                  <p
                    style={{
                      fontSize: "30px",
                      fontStyle: "italic",
                      color: "#445658",
                    }}
                  >
                    {texts[currentTextIndex].line2}
                  </p>
                </div>
              </motion.span>
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
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

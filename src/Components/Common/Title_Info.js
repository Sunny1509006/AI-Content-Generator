// import React from "react";
import "./Title_Info.css";

// export const Title_Info = () => {
//   return (
//     <div className="title-info-main">
//       <h1>Discover the Power of Affordable AI with Faisaliteb AI</h1>
//       <p>Welcome to faisaliteb.ai, your go-to destination for harnessing the power of affordable AI solutions. Our cutting-edge technology combines the prowess of advanced algorithms and machine learning to empower businesses with top-notch content generation and copyright generation tools. From our versatile 123-ai content writer to our magical text generators, we have everything you need to streamline your content creation process.</p>
//     </div>
//   );
// };

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Title_Info = () => {
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
        <div className="title-info-main">
          <h1>Discover the Power of Affordable AI with Faisaliteb AI</h1>
          <div className="title-info-body">
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
                  Trial
                </Button>
              </div>
            </div>
            <img src="/images/power_of_ai.jpg" />
          </div>
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

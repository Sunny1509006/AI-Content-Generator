import React from 'react'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const BeginnerCard = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px',
        backgroundColor: 'rgb(249, 243, 243)',
    }}>
        <p style={{fontSize: "50px", fontWeight: "bold"}}>New to this? No worries!</p>
        <p style={{marginTop: '30px', fontSize: "20px"}}>Our squad of seasoned bloggers and affiliate marketers is here to guide you. 
            We're all about boosting your knowledge and giving you winning strategies for the digital world. 
            Whether you're just starting or already a pro, we've got personalised advice and practical tips to amp up your blog and supercharge your affiliate marketing game. 
            Benefit from our top-notch expertise, and get ready to see your online presence reach new heights.
             Ready for the adventure?</p>
             <div
              className="button-div"
              style={{
                padding: "0 40px",
                marginTop: "50px",

              }}
            >
              <Link to="/login"><Button variant="contained" className="custom-button" >
                Give it a shot for free!
              </Button>
              </Link>
            </div>
    </div>
  )
}

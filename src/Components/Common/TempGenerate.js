import React from 'react'
import "./TempGenerate.css"
import { Grid, Typography, FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const TempGenerate = () => {
    return (
        <div className='tempgenerate-main'>
            <div style={{display: 'flex', gap: '30px'}}>
            <Grid xs={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '70%'}}>
                <FormControl fullWidth>
                    <TextField
                        multiline
                        rows={10}
                        style={{width: '100%', background: 'white'}}
                    placeholder={"Write your Keywords here......"}
                    />
                </FormControl>
                
            </Grid>
            <div style={{width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                <p style={{fontSize: '30px'}}>
                    Write Your Keywords or Title  for Generating Article with <span style={{color: '#ff4a17', fontWeight: 'bold'}}>Free</span> of Cost by a single click! 
                </p>
                <div
              className="button-div"
              style={{
                padding: "0 0px",
                marginTop: "20px",  
              }}
            >
              <Link to="/login"><Button variant="contained" className="custom-button" style={{fontSize: '12px', width: '200px'}}>
                Generate Article
              </Button>
              </Link>
            </div>
            </div>
            </div>
        </div>
    )
}




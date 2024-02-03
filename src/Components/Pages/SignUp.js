import { Avatar, Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import "./SignUp.css";
// import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "../Axios";
import { Captcha } from "../Common/Captcha";

// style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "images/vumisignin.png"})`,
// backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}

const SignUp = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false)

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleMobile = (event) => {
    setMobile(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleApi = () => {
      // console.log(fullName, mobile, email, password, confirmPassword)
      if (password === confirmPassword) {
      axios.post("/api/user/register", {
          name: fullName,
          username: userName,
          mobile: "+88"+mobile,
          email: email,
          password: password,
          hash: "NotInUse"
      })
          .then(result => {
              console.log(result.data)
              alert("success")
              navigate("/login")
          })
          .catch(error=> {
              if (error.response && error.response.status === 403) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  alert(error.response.data.detail);
                } else if (error.request) {
                  // The request was made but no response was received
                  alert(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  alert('Error', error.detail);
                }
          })
        } else {
          // Display an error message if passwords do not match
          setPasswordMatchError(true);
        }
  }

  return (
    <Grid className="sign_up_dummy_div">
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <Paper elevation={20} className="sign_up_content" >
        <Grid align="center" className="login-icon-div">
          <Avatar className="avatar_style">
            {/* <AddCircleOutlineOutlined /> */}
          </Avatar>
          <h2 style={{ padding: "10px" }}>Sign Up</h2>
        </Grid>
        <form>
          <div className="login-form">
            <TextField
              required={true}
              fullWidth
              label="Full Name"
              variant="outlined"
              className="text_field"
              value={fullName}
              onChange={handleFullName}
              inputProps={{ style: { height: "15px" } }}
            />
            <TextField
              required={true}
              fullWidth
              label="User Name"
              variant="outlined"
              className="text_field"
              value={userName}
              onChange={handleUserName}
              inputProps={{ style: { height: "15px" } }}
            />
            <TextField
              required={true}
              fullWidth
              label="Mobile"
              variant="outlined"
              className="text_field"
              value={mobile}
              onChange={handleMobile}
              inputProps={{ style: { height: "15px" } }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              className="text_field"
              value={email}
              onChange={handleEmail}
              inputProps={{ style: { height: "15px" } }}
            />
            <div className="signup-password">
              <TextField
                required={true}
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                className="text_field"
                value={password}
                onChange={handlePassword}
                inputProps={{ style: { height: "15px" } }}
              />
              <TextField
                required={true}
                fullWidth
                type="password"
                label="Confirm password"
                variant="outlined"
                className="text_field"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                inputProps={{ style: { height: "15px" } }}
              />
            </div>
            {/* <Button variant='contained' className='text_field_sign'
                        onClick={handleApi}
                    >সাইন আপ</Button> */}
            {/* type = "submit" */}
            {passwordMatchError && <p style={{color: 'red'}}>Passwords do not match. Please try again.</p>}
            <Captcha />
            <Button className="text_field_sign custom-button" onClick={handleApi}>Submit</Button>
            
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;

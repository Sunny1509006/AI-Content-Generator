import { Avatar, Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import axios from "../Axios";
import { Captcha } from "../Common/Captcha";
import useAuth from "../../hooks/authHooks";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputCaptchaValue, setInputCaptchaValue] = useState("");
  const [captchaHash, setCaptchaHash] = useState(null);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [captchaMatchError, setCaptchaMatchError] = useState(false);
  const { loggedInUser } = useAuth();

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

  const handleCaptchaValue = (event) => {
    setInputCaptchaValue(event.target.value);
  };

  const handleFetchCaptcha = ({ captchaHash: hash }) => {
    setCaptchaHash(hash);
  };

  const handleApi = () => {
    if (!passwordMatchError) {
      axios
        .post("/api/users/register", {
          name: fullName,
          username: userName,
          mobile,
          email,
          password,
          text: inputCaptchaValue,
          hash: captchaHash,
        })
        .then((result) => {
          navigate("/login");
        })
        .catch((error) => {
          if (error.response && error.response.status === 403) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert(error.response.data.detail);
          } else if (error.request) {
            // The request was made but no response was received
            alert(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            alert("Error", error.detail);
          }
        });
    }
  };

  const captchaMatch = () => {
    axios
      .post("/api/captcha/match", {
        hash: captchaHash,
        text: inputCaptchaValue,
      })
      .then((response) => {
        const isMatched = response.data.result;

        setCaptchaMatchError(!isMatched);
        handleApi();
      })
      .catch((error) => {
        setCaptchaMatchError(true);
      });
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordMatchError(false);
    } else {
      setPasswordMatchError(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (!!loggedInUser && loggedInUser?.id) {
      navigate("/dashboard");
    }
  }, [loggedInUser, navigate]);

  return (
    <Grid className="sign_up_dummy_div">
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <Paper elevation={20} className="sign_up_content">
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
            {passwordMatchError && (
              <p style={{ color: "red" }}>
                Passwords do not match. Please try again.
              </p>
            )}
            <Captcha onFetchCaptcha={handleFetchCaptcha} />
            {captchaMatchError && (
              <p style={{ color: "red" }}>
                Captcha did not match. Please try again.
              </p>
            )}
            <TextField
              required={true}
              fullWidth
              label="Enter Captcha Here"
              variant="outlined"
              className="text_field"
              value={inputCaptchaValue}
              onChange={handleCaptchaValue}
              inputProps={{ style: { height: "15px" } }}
            />
            <Button
              className="text_field_sign custom-button"
              onClick={captchaMatch}
              disabled={captchaMatchError || passwordMatchError}
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;

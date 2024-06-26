import {
  Avatar,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";
import { Captcha } from "../Common/Captcha";
import axios from "../Axios";
import Cookies from "universal-cookie";
import { BEARER_TOKEN_COOKIE_NAME } from "../../utils/constants";
import useAuth from "../../hooks/authHooks";
import { useNavigate } from "react-router-dom";
import AppButton from "../Common/AppButton";
import useFetchProfilePicture from "../../hooks/useFetchProfilePicture";
import ForgotPasswordDialog from "../ForgotPassword/ForgotPasswordDialog";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [captchaHash, setCaptchaHash] = useState(null);
  const [inputCaptchaValue, setInputCaptchaValue] = useState("");
  const [captchaMatchError, setCaptchaMatchError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isMatchingCaptcha, setIsMatchingCaptcha] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const { loggedInUser, fetchAuthUser } = useAuth();
  // const { fetchProfilePicture } = useFetchProfilePicture();
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: "/" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaValue = (event) => {
    setInputCaptchaValue(event.target.value);
  };

  const handleFetchCaptcha = ({ captchaHash: hash }) => {
    setCaptchaHash(hash);
  };

  const handleCloseEmailDialog = () => {
    setIsEmailDialogOpen(false);
  };

  const handleApi = () => {
    setIsLoggingIn(true);

    axios
      .post("/api/users/login", {
        username: userName,
        password,
        hash: captchaHash,
        text: inputCaptchaValue,
      })
      .then((response) => {
        const bearerToken = response?.data?.token;

        if (!!bearerToken) {
          cookies.set(BEARER_TOKEN_COOKIE_NAME, bearerToken);

          fetchAuthUser();
        } else {
          throw Error("Can't login with provided credentials!");
        }
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
      })
      .finally(() => {
        setIsLoggingIn(false);
      });
  };

  const captchaMatch = () => {
    setIsMatchingCaptcha(true);

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
      })
      .finally(() => {
        setIsMatchingCaptcha(false);
      });
  };

  useFetchProfilePicture();

  useEffect(() => {
    if (!!loggedInUser && loggedInUser?.id) {
      navigate("/dashboard");
    }
  }, [loggedInUser, navigate]);

  return (
    <Grid className="login_up_dummy_div">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Paper elevation={20} className="login_up_content">
        <Grid align="center" className="login-icon-div">
          <Avatar className="avatar_style">
            {/* <AddCircleOutlineOutlined /> */}
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <form
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              captchaMatch();
            }
          }}
        >
          <div className="login-form">
            <TextField
              required={true}
              fullWidth
              label="Username"
              value={userName}
              onChange={handleUserName}
              inputProps={{ style: { height: "15px" } }}
            />
            <FormControl>
              <InputLabel htmlFor="login-password">Password</InputLabel>
              <OutlinedInput
                id="login-password"
                required={true}
                fullWidth
                label="Password"
                value={password}
                onChange={handlePassword}
                inputProps={{ style: { height: "15px" } }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <Button variant='contained' className='text_field_login' */}
            {/* // onClick={handleApi} */}
            {/* >লগইন</Button> */}
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
              value={inputCaptchaValue}
              onChange={handleCaptchaValue}
              inputProps={{ style: { height: "15px" } }}
            />
            <AppButton
              variant="contained"
              onClick={captchaMatch}
              loading={isLoggingIn || isMatchingCaptcha}
            >
              Login
            </AppButton>
            <Stack>
              <Stack>
                <Typography sx={{ fontSize: "14px" }}>
                  Forgot your password?
                  <AppButton
                    size="small"
                    onClick={() => {
                      setIsEmailDialogOpen(true);
                    }}
                    sx={{ minWidth: 0 }}
                  >
                    Click Here
                  </AppButton>
                </Typography>
              </Stack>
              <Stack>
                <Typography sx={{ fontSize: "14px" }}>
                  Don't have an account? Please{" "}
                  <AppButton href="/signup" size="small" sx={{ minWidth: 0 }}>
                    Register
                  </AppButton>
                </Typography>
              </Stack>
            </Stack>
          </div>
        </form>
      </Paper>
      <ForgotPasswordDialog
        open={isEmailDialogOpen}
        onClose={handleCloseEmailDialog}
      />
    </Grid>
  );
};

export default Login;

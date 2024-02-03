import { Avatar, Button, Grid, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Login.css'
// import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Captcha } from '../Common/Captcha';
import axios from '../Axios';
// import Cookies from 'universal-cookie'
// import jwt from "jwt-decode"

const Login = (props) => {
    const navigate = useNavigate() 

    // const cookies = new Cookies();

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        
        axios.post("/api/user/login", {
            username: userName,
            password: password,
            hash: "NotInUse"
        })
            .then(result => {
                localStorage.setItem('username', userName);
                // cookies.set("jwt", result.data.jwt);

                if (localStorage.getItem('username')) {
                    navigate('/')
                }
            })
            .catch(error => {
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
    }

    return (
        <Grid className='login_up_dummy_div'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Paper elevation={20} className='login_up_content'>
                <Grid align='center' className='login-icon-div'>
                    <Avatar className='avatar_style' >
                        {/* <AddCircleOutlineOutlined /> */}
                    </Avatar>
                    <h2 >Login</h2>
                </Grid>
                <form>
                    <div className='login-form'>
                    <TextField required={true} fullWidth label="Username" variant="outlined" className='text_field'
                        value={userName}
                        onChange={handleUserName}
                        inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth type='password' label="Password" variant="outlined" className='text_field'
                        value={password}
                        onChange={handlePassword}
                        inputProps={{ style: { height: '15px' } }} />
                    {/* <Button variant='contained' className='text_field_login' */}
                        {/* // onClick={handleApi} */}
                    {/* >লগইন</Button> */}
                    <Captcha />
                    <Button className='text_field_login custom-button' onClick={handleApi}>Login</Button>
                    </div>
                </form>

            </Paper>
        </Grid>
    )
}

export default Login

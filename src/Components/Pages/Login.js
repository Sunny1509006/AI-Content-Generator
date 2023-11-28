import { Avatar, Button, Grid, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Login.css'
// import { AddCircleOutlineOutlined } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'universal-cookie'
// import jwt from "jwt-decode"

const Login = (props) => {
    const navigate = useNavigate() 

    // const cookies = new Cookies();

    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    const handleMobile = (e) => {
        setMobile(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // const handleApi = () => {
    //     console.log(mobile, password)
    //     axios.post("/api/login/", {
    //         phone_number: "+88"+mobile,
    //         password: password,
    //     })
    //         .then(result => {
    //             localStorage.setItem('jwt', result.data.jwt);
    //             // cookies.set("jwt", result.data.jwt);

    //             console.log(result.data.detail)
    //             authContext.setToken(result.data.jwt);
    //             if (localStorage.getItem('jwt')) {
    //                 navigate('/')
    //             }
    //         })
    //         .catch(error => {
    //             if (error.response && error.response.status === 403) {
    //                 // The request was made and the server responded with a status code
    //                 // that falls out of the range of 2xx
    //                 alert(error.response.data.detail);
    //               } else if (error.request) {
    //                 // The request was made but no response was received
    //                 alert(error.request);
    //               } else {
    //                 // Something happened in setting up the request that triggered an Error
    //                 alert('Error', error.detail);
    //               }
    //         })
    // }

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
                    <TextField required={true} fullWidth label="Username or Email" variant="outlined" className='text_field'
                        value={mobile}
                        onChange={handleMobile}
                        inputProps={{ style: { height: '15px' } }} />
                    <TextField required={true} fullWidth type='password' label="Password" variant="outlined" className='text_field'
                        value={password}
                        onChange={handlePassword}
                        inputProps={{ style: { height: '15px' } }} />
                    {/* <Button variant='contained' className='text_field_login' */}
                        {/* // onClick={handleApi} */}
                    {/* >লগইন</Button> */}
                    <Button className='text_field_login custom-button'>Login</Button>
                    </div>
                </form>

            </Paper>
        </Grid>
    )
}

export default Login

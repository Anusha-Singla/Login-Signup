import { Button, Link, Paper } from '@mui/material';
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../stores/appDispatch';
import { loginUser } from '../stores';

const Login = () => {
    const dispatch = useAppDispatch();
    const [responseData, setResponseData] = useState({})
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [isLoggedIn, updateIsLoggedIn] = useState(false);
    // const token = localStorage.getItem("user-info");
    // let loggedIn = true;
    // if (token == null) {
    //     loggedIn = false;
    // }
    const inputText = (e) => {
        const { name, value } = e.target
        setLoginData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser()).then(response => {
            setResponseData(response.data)
            if (responseData.length !== 0) {
                for (let i = 0; i < responseData.length; i++) {
                    if (responseData[i].email === loginData.email) {
                        if (responseData[i].password === loginData.password) {
                            updateIsLoggedIn(true)
                            let data = [responseData[i].email, responseData[i].password];
                            localStorage.setItem("user-info", JSON.stringify(data));
                        }
                    }
                }
            }
        })
    }
    return (
        <Paper elevation={3} p={2}>
            {/* {loggedIn ? <Link to="/home" /> : <Link to="/" />}
            {isLoggedIn ? <Link to="/home" /> : null} */}
            <FormGroup>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={loginData?.email}
                            onChange={inputText}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            placeholder="Password"
                            name='password'
                            value={loginData?.password}
                            onChange={inputText}
                        />
                    </div>
                    <Button variant="outlined" color="success" onClick={onSubmit}>Login</Button>
                </Box>
            </FormGroup>
        </Paper>
    )
}
export default Login;


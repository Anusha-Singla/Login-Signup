import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../stores/appDispatch';
import { loginUser } from '../stores';
import { useSelector } from 'react-redux';

const Login = () => {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
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
            return response.data; 
        })
    }

    return (
        <Paper elevation={3} p={2}>
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


import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../stores/appDispatch' ;
import { registerUser } from '../stores/register/RegisterService';

const Register = () => {
    const dispatch = useAppDispatch();
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    //TARGET THE USER INPUT
    const inputText = (e) => {
        const { name, value } = e.target;
        console.log("name,value", e.target.name, e.target.value)
        //SETTING UP THE STATE 
        setSignupData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("-------",signupData)
        dispatch(registerUser(signupData))
    }
    return (
        <Paper elevation={3} p={2}>
            <FormGroup>
                <Box
                    component="form"
                    sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}
                    noValidate
                    autoComplete="off">
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            placeholder="Username"
                            name="username"
                            value={signupData?.username}
                            onChange={inputText}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={signupData?.email}
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
                            value={signupData?.password}
                            onChange={inputText}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={signupData?.confirmPassword}
                            onChange={inputText}
                        />
                    </div>
                    <Button variant="outlined" color="success" onClick={onSubmit}>Register</Button>
                </Box>
            </FormGroup>
        </Paper>
    )
}
export default Register;


import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../stores/appDispatch' ;

const Login = () => {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

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
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            placeholder="Password"
                            name='password'
                        />
                    </div>
                    <Button variant="outlined" color="success">Login</Button>
                </Box>
            </FormGroup>
        </Paper>
    )
}
export default Login;


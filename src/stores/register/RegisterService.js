import axios from 'axios';
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './RegisterType';

export const registerUser = (signupData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: REGISTER_USER_REQUEST });
            const response = axios.post('http://localhost:8000/authentication', signupData);                
            dispatch({ type: REGISTER_USER_SUCCESS,
             });
           return response.json();
        } catch (error) {
            dispatch({ type: REGISTER_USER_ERROR })
        }
    }
}

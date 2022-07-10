import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "./LoginType";
import axios from 'axios';

export const loginUser = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: USER_LOGIN_REQUEST });
            const response = axios.get('http://localhost:8000/authentication', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            dispatch({ type: USER_LOGIN_SUCCESS });
            return response
        } catch (error) {
            dispatch({ type: USER_LOGIN_ERROR });
        }
    }
}

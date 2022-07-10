import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "./LoginType";

export const userLoginRequest = () =>{
    return (dispatch) =>{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
    }
}
export const userLoginSuccess = () =>{
    return(dispatch) =>{
        dispatch({
            type: USER_LOGIN_SUCCESS,
        })
    }
}
export const userLoginError = () =>{
    return(dispatch) =>{
        dispatch({
            type: USER_LOGIN_ERROR
        })
    }
}
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./RegisterType";

export const registerUserRequest = () =>{
    return (dispatch) => {
        dispatch({
            type: REGISTER_USER_REQUEST
        })
    }
}
export const registerUserSuccess = (signupData) =>{
    return (dispatch) => {
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: signupData
        })
    }
}
export const registerUserError = () =>{
    return (dispatch) => {
        dispatch({
            type: REGISTER_USER_ERROR
        })
    }
}
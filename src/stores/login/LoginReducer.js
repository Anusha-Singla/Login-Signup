import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from "./LoginType";

const initalState = {
    loading : false,
}

export const LoginReducer = (
    state = initalState,
    action
) =>{
    switch(action.type){
        case USER_LOGIN_REQUEST:{
            return{
                ...state,
                loading: true
            }
        }
        case USER_LOGIN_SUCCESS:{
            return{
                ...state,
                loading: false
            }
        }
        case USER_LOGIN_ERROR:{
            return{
                ...state,
                loading: false
            }
        }
        default :
        return state
    }

}
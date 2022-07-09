import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./RegisterType";

const initalState = {
    loading: false,
    signupData:{}
}

export const RegisterReducer = (
    state = initalState,
    action
) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                signupData: action.payload
            }
        }
        case REGISTER_USER_ERROR: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state
    }
}
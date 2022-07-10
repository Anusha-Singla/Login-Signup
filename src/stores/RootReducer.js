import { combineReducers } from "redux";
import { RegisterReducer } from './register/RegisterReducer';
import { LoginReducer } from './login/LoginReducer';

const combineReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer
})

const rootReducer = (state, action) => {
    return combineReducer(state, action)
}

export default rootReducer;
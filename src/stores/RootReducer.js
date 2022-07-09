import { combineReducers } from "redux";
import { RegisterReducer } from './register/RegisterReducer';

const combineReducer = combineReducers({
    register: RegisterReducer
})

const rootReducer = (state, action) => {
    return combineReducer(state, action)
}

export default rootReducer;
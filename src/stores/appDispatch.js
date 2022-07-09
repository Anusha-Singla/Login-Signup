import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./RootReducer";

const store = configureStore ({
    reducer: rootReducer
})

export const AppDispatch = store.dispatch; 
export const useAppDispatch = () => useDispatch();

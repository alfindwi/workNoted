import {useDispatch, useSelector} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store
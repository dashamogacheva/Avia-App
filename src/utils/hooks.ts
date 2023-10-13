import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "./reducer";
import {AppDispatch} from "../App";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
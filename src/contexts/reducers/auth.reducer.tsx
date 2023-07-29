import { auth } from "../../firebase/client";
import { IAuth } from "../auth.context";

export const UPDATE_AUTH = "UPDATE_AUTH";
export const CLEAR_AUTH = "CLEAR_AUTH";
export const LOGIN = "LOGIN";

export const initialAuthState: IAuth = auth.currentUser?.uid
    ? {
          user: auth.currentUser,
          token: null,
          authenticated: true,
      }
    : { authenticated: false };

console.log(
    "Initial Auth State : ",
    initialAuthState,
    auth.currentUser?.uid,
    auth.currentUser
);

interface IAction {
    type: string;
    payload?: IAuth;
}

export const authReducer = (
    state: IAuth = initialAuthState,
    action: IAction
) => {
    switch (action.type) {
        case LOGIN:
            const loggedInState = {
                ...state,
                ...action.payload,
                authenticated: true,
            };
            return loggedInState;
        case UPDATE_AUTH:
            return {
                ...state,
                ...action.payload,
            };
        case CLEAR_AUTH:
            localStorage.clear();
            sessionStorage.clear();
            return {
                authenticated: false,
            };
        default:
            return state;
    }
};

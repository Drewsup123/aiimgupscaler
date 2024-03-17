import React, { Reducer, useEffect, useReducer } from "react";
import {
    CLEAR_AUTH,
    UPDATE_AUTH,
    initialAuthState,
} from "./reducers/auth.reducer";

export interface IAuthContext {
    authState: IAuth;
    updateAuthState: Function;
    clearAuthState: Function;
    showLoginModal?: boolean;
}

export interface IAuth {
    authenticated: boolean;
    user?: any;
    token?: string | null;
    showLoginModal?: boolean;
}

const AuthContext = React.createContext<IAuthContext>({
    authState: initialAuthState,
    updateAuthState: () => {},
    clearAuthState: () => {},
});

export const AuthProvider = ({ children, reducer, initialState }: any) => {
    const [globalAuthState, authDispatch] = useReducer<Reducer<IAuth, any>>(
        reducer,
        initialState
    );

    const updateAuth = (type: string, payload: IAuth) => {
        authDispatch({ type, payload });
    };

    const clearAuthState = () => {
        alert("Clearing auth State");
        return authDispatch({ type: CLEAR_AUTH });
    };

    return (
        <AuthContext.Provider
            value={{
                authState: globalAuthState,
                updateAuthState: updateAuth,
                clearAuthState,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const AuthStateConsumer = AuthContext.Consumer;

export default AuthContext;

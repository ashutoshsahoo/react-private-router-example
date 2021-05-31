import React, { Dispatch } from "react";
import { AuthState, AuthAction } from "../reducers/AuthReducer";

export const initialState: AuthState = {
  isAuthenticated: false
};

export const AuthContext = React.createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null
});

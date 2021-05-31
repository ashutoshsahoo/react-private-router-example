export interface AuthState {
  isAuthenticated: boolean;
}

export enum AuthKind {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

export type AuthAction = {
  type: AuthKind;
  payload: boolean;
};

export const loginAction: AuthAction = {
  type: AuthKind.LOGIN,
  payload: true
};
export const logoutAction: AuthAction = {
  type: AuthKind.LOGOUT,
  payload: false
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthKind.LOGIN:
      return {
        ...state,
        isAuthenticated: true
      };
    case AuthKind.LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

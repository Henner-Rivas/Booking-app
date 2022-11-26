import React, { createContext, useReducer, useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
let user = localStorage.getItem("user");

const INITIAL_STATE = {
  user: user ? JSON.parse(user) : null,
  loading: false,
  error: null,
};
export const AuthContext = createContext<{
  state: StateAuth;
  dispatch: React.Dispatch<ActionAuth>;
}>({
  state: INITIAL_STATE,
  dispatch: ({ type, payload }: ActionAuth) => null,
});

export const AuthReducer = (state: StateAuth, action: ActionAuth) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectRoute = ({ children }: any) => {
  if (!INITIAL_STATE || !user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export type StateAuth = {
  user: User | any;
  loading: boolean;
  error: any;
};
type User = {
  _id?: string;
  username?: string;
  email?: string;
  createAt?: string;
  updateAt?: string;
  isAdmin?: boolean;
  _v?: any;
};

export type ActionAuth = {
  payload: string[] | string | any;
  type: "LOGIN_START" | "LOGIN_SUCCESS" | "LOGIN_FAILURE" | "LOGOUT";
};

export default AuthContext;

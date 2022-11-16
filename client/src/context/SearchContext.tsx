import React, { createContext, useReducer } from "react";
import { options } from "../components/ButtonOptions";
export const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};
export const SearchContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: ({ type, payload }: Action) => null,
});

export const SearchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  return (
    <SearchContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {" "}
      {children}
    </SearchContext.Provider>
  );
};

export type Dates = {
  startDate: Date;
  endDate: Date;
  key: any;
};
export type State = {
  city: string | undefined;
  dates: Dates[] | any;
  options: options;
};

export type Action = {
  payload: State;
  type: "NEW_SEARCH" | "RESET_SEARCH";
};

export default SearchContext;

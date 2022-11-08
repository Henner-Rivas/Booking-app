import React, { createContext, useReducer } from "react";
import { options, action } from "../components/ButtonOptions";
import { SearchReducer } from "./reducers";
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

export type State = {
  city: string | undefined;
  dates: string[] | never[];
  options: options;
};

export type Action = {
  payload: State;
  type: "NEW_SEARCH" | "RESET_SEARCH";
};

export default SearchContext;

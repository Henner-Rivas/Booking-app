import { State, Action, INITIAL_STATE } from "./SearchContext";

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

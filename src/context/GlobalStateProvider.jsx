import { createContext, useReducer } from "react";

import PropTypes from "prop-types";
import reducers from "./reducers";

// Initial state
const initialState = {
  user: null,
  books: [],
  isLoading: true,
};
// Create context
const GlobalStateContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalStateContext, GlobalStateProvider };

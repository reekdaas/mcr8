import { createContext, useContext, useReducer } from "react";
import { initialValue, searchReducer } from "./reducer";

export const AppContext = createContext(null);
export default function AppContextProvider({ children }) {
  const [initialSearchvalue, searchDispatch] = useReducer(
    searchReducer,
    initialValue
  );
  // console.log(initialSearchvalue);
  const value = { initialSearchvalue, searchDispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}

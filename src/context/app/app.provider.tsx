import { ReactNode, useReducer } from "react";
import { initAppStore, AppContext } from "./app.context";
import { appReducer } from "./app.reducer";

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [init, dispatch] = useReducer(appReducer, initAppStore);
  return (
    <AppContext.Provider value={{ ...init, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

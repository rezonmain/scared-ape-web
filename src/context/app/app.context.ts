import { createContext, Dispatch, useContext } from "react";
import { DrawerInterface } from "flowbite";
import { StoreAction } from "./app.reducer";

export interface AppStore {
  drawer: DrawerInterface | undefined;
}

export const initAppStore: AppStore = {
  drawer: undefined,
};

export interface AppContext extends AppStore {
  dispatch: Dispatch<StoreAction>;
}

export const AppContext = createContext<AppContext>({
  ...initAppStore,
  dispatch: () => undefined,
});

export const useStore = (): AppContext => useContext(AppContext);

import { createContext, Dispatch, useContext } from "react";
import { DrawerInterface } from "flowbite";
import { StoreAction } from "./app.reducer";
import { User } from "@/models/User";

export interface AppStore {
  drawer: DrawerInterface | undefined;
  user: User | undefined;
}

export const initAppStore: AppStore = {
  drawer: undefined,
  user: undefined,
};

export interface AppContext extends AppStore {
  dispatch: Dispatch<StoreAction>;
}

export const AppContext = createContext<AppContext>({
  ...initAppStore,
  dispatch: () => undefined,
});

export const useAppStore = (): AppContext => useContext(AppContext);

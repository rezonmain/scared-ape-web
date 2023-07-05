import { AppStore } from "./app.context";

export type StoreAction =
  | {
      type: "set_drawer";
      payload: AppStore["drawer"];
    }
  | { type: "set_user"; payload: AppStore["user"] };

const appReducer = (state: AppStore, action: StoreAction): AppStore => {
  switch (action.type) {
    case "set_drawer":
      return { ...state, drawer: action.payload };
    case "set_user":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export { appReducer };

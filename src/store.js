import { createStore } from "redux";
import settingsReducer from "../src/reducers/settingsReducer";

export const store = createStore(settingsReducer);

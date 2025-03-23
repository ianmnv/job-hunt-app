import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { applicationReducer } from "./features/applicationSlice";

const rootReducer = combineReducers({
  application: applicationReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

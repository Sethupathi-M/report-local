import { combineReducers, configureStore, EnhancedStore, PreloadedState } from '@reduxjs/toolkit';
import reportsReducers from './slice/reports';

const rootReducer = combineReducers({
  reports: reportsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({ serializableCheck: false, thunk: false })],
    devTools: true,
  });
};

const store = setupStore();

export default store;

import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AppReducer from './app/appSlice';

const rootReducer = combineReducers({
  app: AppReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;

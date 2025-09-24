import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice  from "./favorites.slice";
import { saveFavorites } from './storage';

export const store = configureStore({
  reducer: {
	favorites: favoritesSlice
  }
});

store.subscribe(() => saveFavorites(store.getState().favorites));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
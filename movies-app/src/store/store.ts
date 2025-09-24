import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice  from "./favorites.slice";
import { saveFavorites, saveUsers } from './storage';
import userSlice from "./user.slice";

export const store = configureStore({
  reducer: {
	favorites: favoritesSlice,
  users: userSlice
  }
});

store.subscribe(() => saveFavorites(store.getState().favorites));
store.subscribe(() => saveUsers(store.getState().users));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
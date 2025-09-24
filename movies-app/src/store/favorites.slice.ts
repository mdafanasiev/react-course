import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { favState, loadFavorites, saveFavorites } from "./storage";
import { MovieCardProps } from "../components/MovieCard/MovieCard.props";

const initialState: favState[] = loadFavorites();

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<{username: string, movie: MovieCardProps['movie']}>) => {
		const userFavs = state.find((fav) => fav.username ===  action.payload.username);
		if (userFavs) {
			userFavs.favList.push(action.payload.movie);
		} 
		else {
			state.push({username: action.payload.username, favList: [action.payload.movie]})
		}
	},

    removeFromFavorites: (state, action: PayloadAction<{ username: string, movieID: MovieCardProps['movie']['id']}>) => {
		const userFavs = state.find((fav) => fav.username === action.payload.username);
		if (userFavs) {
			const movieIdx = userFavs.favList.findIndex((mv) => mv.id === action.payload.movieID);
			console.log(movieIdx);
			if (movieIdx >= 0) {
				userFavs.favList.splice(movieIdx, 1);
			}
		}
	},
  },
});


export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
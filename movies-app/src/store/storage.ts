import { MovieCardProps } from "../components/MovieCard/MovieCard.props";

export interface favState {
  username: string | null;
  favList: MovieCardProps['movie'][];
}

const favStorageKey = "favorites";

export function saveFavorites(favs: favState[]) {
	localStorage.setItem(favStorageKey, JSON.stringify(favs));
}

export function loadFavorites(): favState[] {
  const favs = localStorage.getItem(favStorageKey);
  if (favs) {
	const favList = JSON.parse(favs) as favState[];
	return favList;
  }
  return [];
}



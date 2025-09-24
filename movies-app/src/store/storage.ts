import { MovieCardProps } from "../components/MovieCard/MovieCard.props";
import { UserInfo } from "../interfaces/user.interface";

export interface favState {
  username: string | null;
  favList: MovieCardProps['movie'][];
}

const favStorageKey = 'favorites';
const usersStorageKey = 'users';

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

export function saveUsers(users: UserInfo[]) {
  localStorage.setItem(usersStorageKey, JSON.stringify(users));
}

export function loadUsers(): UserInfo[] {
  const users = localStorage.getItem(usersStorageKey);

  if (users) {
    const userList = JSON.parse(users) as UserInfo[];
    return userList;
  }

  return [];
}




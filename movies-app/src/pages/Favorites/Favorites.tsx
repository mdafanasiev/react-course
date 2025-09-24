import { useContext } from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Layout/Body/Body";
import MainContent from "../../components/Layout/MainContent/MainContent";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Favorites() {
  const username = useSelector((s: RootState) => {
    const loggedUser = s.users.find((user) => user.isLogged);
    if (loggedUser) {
      return loggedUser.name;
    }
    return "";
  });

   const favs = useSelector(
     (s: RootState) =>
       s.favorites.find((fav) => fav.username === username)?.favList ?? []
   );
  return (
    <Body>
      <Header appearance="big" title="Избранное" />
      <MainContent>
        <MoviesCardList>
          {favs.map((fav) => (
              <MovieCard movie={fav} key={fav.id} />
          ))}
        </MoviesCardList>
      </MainContent>
    </Body>
  );
}

export default Favorites;

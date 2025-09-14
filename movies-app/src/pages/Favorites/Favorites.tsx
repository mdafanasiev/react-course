import { useContext } from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Layout/Body/Body";
import { MoviesContext } from "../../context/movies.context";
import MainContent from "../../components/Layout/MainContent/MainContent";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

function Favorites() {
  const { movies} = useContext(MoviesContext);
  return (
    <Body>
      <Header appearance="big" title="Избранное" />
      <MainContent>
        <MoviesCardList>
          {movies.filter(mv => mv.inFavourites).map((cardData) => (
              <MovieCard cardData={cardData} key={cardData.id} />
          ))}
        </MoviesCardList>
      </MainContent>
    </Body>
  );
}

export default Favorites;

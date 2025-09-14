import './App.css';
import Body from './components/Layout/Body/Body';
import UpperBody from './components/Layout/UpperBody/UpperBody';
import Search from './components/Search/Search';
import MainContent from './components/Layout/MainContent/MainContent';
import MovieCard from './components/MovieCard/MovieCard';
import MoviesCardList from './components/MoviesCardList/MoviesCardList';
import { useContext, useEffect } from 'react';
import { MoviesContext } from './context/movies.context';
import { Link } from 'react-router-dom';
function App() {	
	const { movies, setMovies } = useContext(MoviesContext);

	return (
    <Body>
      <UpperBody>
        <Search />
      </UpperBody>
      <MainContent>
        <MoviesCardList>
          {movies.map((cardData) => (
            // <Link to={`/movie/${cardData.id}`} key={cardData.id}>
            <MovieCard key={cardData.id} cardData={cardData} />
            //  </Link>
          ))}
        </MoviesCardList>
      </MainContent>
    </Body>
  );
}

export default App;


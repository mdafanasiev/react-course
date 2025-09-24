import './App.css';
import Body from './components/Layout/Body/Body';
import UpperBody from './components/Layout/UpperBody/UpperBody';
import Search from './components/Search/Search';
import MainContent from './components/Layout/MainContent/MainContent';
import MovieCard from './components/MovieCard/MovieCard';
import MoviesCardList from './components/MoviesCardList/MoviesCardList';
import { useContext } from 'react';
import { MoviesContext } from './context/movies.context';

function App() {	
	const { movies } = useContext(MoviesContext);

	return (
    <Body>
      <UpperBody>
        <Search />
      </UpperBody>
      <MainContent>
        <MoviesCardList>
          {movies.map((mv) => (
            <MovieCard key={mv.id} movie={mv} />
          ))}
        </MoviesCardList>
      </MainContent>
    </Body>
  );
}

export default App;


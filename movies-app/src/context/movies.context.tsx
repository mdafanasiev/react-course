import { createContext, ReactNode, useState,  Dispatch, SetStateAction} from 'react';
import { MovieCardProps } from '../components/MovieCard/MovieCard.props';

type CardData = MovieCardProps['movie'];

type MoviesArray = Array<CardData>;
type MoviesContextType = {
  movies: MoviesArray,
  setMovies?: Dispatch<SetStateAction<MoviesArray>>
};
// eslint-disable-next-line react-refresh/only-export-components
export const MoviesContext = createContext<MoviesContextType>({
  movies: [],
});

export const MoviesContextProvider = ({ children }: { children: ReactNode }) => {
  
  const [movies, setMovies] = useState<MoviesArray>([]);

  const moviesContextValue: MoviesContextType = { movies, setMovies };
  return (
    <MoviesContext.Provider value={moviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

import { createContext, ReactNode, useState,  Dispatch, SetStateAction} from 'react';
import { MovieCardProps } from '../components/MovieCard/MovieCard.props';

type CardData = MovieCardProps["cardData"];
interface ICardData extends CardData {
  id: number
}

type MoviesArray = Array<ICardData>;
type MoviesContextType = {
  movies: MoviesArray,
  setMovies?: Dispatch<SetStateAction<MoviesArray>>
};
// eslint-disable-next-line react-refresh/only-export-components
export const MoviesContext = createContext<MoviesContextType>({
  movies: [],
});

export const MoviesContextProvider = ({ children }: { children: ReactNode }) => {
  const moviesCardsData = [
    {
      id: 1,
      title: "Black widow",
      filename: "BlackWidow.png",
      inFavourites: false,
      rating: 324,
    },
    {
      id: 2,
      title: "Friends",
      filename: "Friends.png",
      inFavourites: false,
      rating: 124,
    },
    {
      id: 3,
      title: "How I Met Your Mother",
      filename: "HowiMetYourMother.png",
      inFavourites: false,
      rating: 235,
    },
    {
      id: 4,
      title: "Loki",
      filename: "Loki.png",
      inFavourites: false,
      rating: 123,
    },
    {
      id: 5,
      title: "Money Heist",
      filename: "MoneyHeist.png",
      inFavourites: true,
      rating: 8125,
    },
    {
      id: 6,
      title: "Shang Chi",
      filename: "ShangChi.png",
      inFavourites: false,
      rating: 123,
    },
    {
      id: 7,
      title: "The Big Bang Theory",
      filename: "TheBigBangTheory.png",
      inFavourites: false,
      rating: 12,
    },
    {
      id: 8,
      title: "Two And A Half Man",
      filename: "TwoAndAHalfMan.png",
      inFavourites: false,
      rating: 456,
    },
  ];

  const [movies, setMovies] = useState<MoviesArray>(moviesCardsData);

  const moviesContextValue: MoviesContextType = { movies, setMovies };
  return (
    <MoviesContext.Provider value={moviesContextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

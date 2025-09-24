import styles from './MovieCard.module.css';
import Favourite from '../Favourite/Favourite';
import Rating from '../Rating/Rating';
import { MovieCardProps } from './MovieCard.props';
import MovieCover from '../MovieCover/MovieCover';
import { MouseEvent, useContext } from 'react';
import { MoviesContext } from '../../context/movies.context';
import { Link } from 'react-router-dom';

function MovieCard( { movie } : MovieCardProps ) {
	const title = movie.title;
	const image = movie.image;
	const inFavorites = movie.inFavorites;
	const rating = movie.rating;
	const id = movie.id;

	const { movies, setMovies } = useContext(MoviesContext);

	const favouritesHandler = function(e: MouseEvent) {
		const _movies = [...movies];
		const mv = _movies.find((mv) => mv.id === id);
		if (mv) {
			mv.inFavorites = !mv.inFavorites;
		}
		setMovies!(_movies);
	}

	return (
    <div className={styles["movie-card"]}>
      <div className={styles["movie-card__cover"]}>
        <Link to={`/movie/${id}`}>
          <MovieCover size="small" path={image ?? ""} />
        </Link>
        <div className={styles["movie-card__cover__rating-popup"]}>
          <Rating ratingValue={rating} />
        </div>
      </div>
      <div className={styles["movie-card__desc"]}>
        <div className={styles["movie-card__desc__title"]}>{title}</div>
        <Favourite inFavorites={inFavorites ?? false} onClick={favouritesHandler} />
      </div>
    </div>
  );
}

export default MovieCard;

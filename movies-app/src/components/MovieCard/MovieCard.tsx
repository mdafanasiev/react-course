import styles from './MovieCard.module.css';
import Favourite from '../Favourite/Favourite';
import Rating from '../Rating/Rating';
import { MovieCardProps } from './MovieCard.props';
import MovieCover from '../MovieCover/MovieCover';
import { MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesActions } from '../../store/favorites.slice';
import { favState } from '../../store/storage';
import { UserContext } from '../../context/user.context';

function MovieCard( { movie } : MovieCardProps ) {
	const title = movie.title;
	const image = movie.image;
	const rating = movie.rating;
	const id = movie.id;
	const dispatch = useDispatch<AppDispatch>();
	const { userName } = useContext(UserContext);
	const inFavorites = useSelector((s: RootState) => { 
		let result = false;
		const userFavs = s.favorites.find((fav) => fav.username === userName);
		if (userFavs) {
			result = userFavs.favList.some((mv) => mv.id === movie.id);
		}
		return result;
	});
	
	const favouritesHandler = function(e: MouseEvent) {
		if (inFavorites) {
			dispatch(favoritesActions.removeFromFavorites({ username: userName, movieID: id}));
		}
		else {
			dispatch(favoritesActions.addToFavorites({ username: userName, movie }));
		}
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
        <Favourite inFavorites={inFavorites} onClick={favouritesHandler} />
      </div>
    </div>
  );
}

export default MovieCard;

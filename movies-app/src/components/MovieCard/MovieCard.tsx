import styles from './MovieCard.module.css';
import Favourite from '../Favourite/Favourite';
import Rating from '../Rating/Rating';
import { MovieCardProps } from './MovieCard.props';
import MovieCover from '../MovieCover/MovieCover';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { favoritesActions } from '../../store/favorites.slice';

function MovieCard( { movie } : MovieCardProps ) {
	const title = movie.title;
	const image = movie.image;
	const rating = movie.rating;
	const id = movie.id;
	const dispatch = useDispatch<AppDispatch>();
	const username = useSelector((s: RootState) => {
    const loggedUser = s.users.find((user) => user.isLogged);
    if (loggedUser) {
      return loggedUser.name;
    }
    return "";
  });
	const inFavorites = useSelector((s: RootState) => { 
		let result = false;
		const userFavs = s.favorites.find((fav) => fav.username === username);
		if (userFavs) {
			result = userFavs.favList.some((mv) => mv.id === movie.id);
		}
		return result;
	});
	
	const favouritesHandler = function(e: MouseEvent) {
		if (inFavorites) {
			dispatch(
        favoritesActions.removeFromFavorites({
          username: username,
          movieID: id,
        })
      );
		}
		else {
			dispatch(favoritesActions.addToFavorites({ username: username, movie }));
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

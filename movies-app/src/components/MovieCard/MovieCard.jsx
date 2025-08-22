import styles from './MovieCard.module.css';
import Favourite from '../Favourite/Favourite';
import Rating from '../Rating/Rating';

function MovieCard( { cardData } ) {
	const coversFolder = '/MoviesCovers/';
	const title = cardData.title;
	const filename = cardData.filename;
	const inFavourites = cardData.inFavourites;
	const rating = cardData.rating;

	return (
		<div className={styles['movie-card']}>
			<div className={styles['movie-card__cover']}>
				<img src={coversFolder + filename} />
				<div className={styles['movie-card__cover__rating-popup']}>
					<Rating ratingValue={rating} />
				</div>
			</div>
			<div className={styles['movie-card__desc']}>
				<div className={styles['movie-card__desc__title']}>{title}</div>
				<Favourite inFavourites={inFavourites} />
			</div>
		</div>
	);
}

export default MovieCard;

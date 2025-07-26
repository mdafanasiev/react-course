import './MovieCard.css';
import Favourite from '../Favourite/Favourite';
import Rating from '../Rating/Rating';

function MovieCard( { cardData } ) {
	const coversFolder = '/MoviesCovers/';
	const title = cardData.title;
	const filename = cardData.filename;
	const inFavourites = cardData.inFavourites;
	const rating = cardData.rating;

	return (
		<div className="movie-card">
			<div className="movie-card__cover">
				<img src={coversFolder + filename} />
				<div className="movie-card__cover__rating-popup">
					<Rating ratingValue={rating} />
				</div>
			</div>
			<div className="movie-card__desc">
				<div className="movie-card__desc__title">{title}</div>
				<Favourite inFavourites={inFavourites} />
			</div>
		</div>
	);
}

export default MovieCard;

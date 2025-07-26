import './Rating.css';

function Rating({ ratingValue }) {
	const ratingIcon = '/icons/star.svg';
	return (
		<div className="rating">
			<img src={ratingIcon} alt="Рейтинг" />
			<span className="rating__value">{ratingValue}</span>
		</div>
	);
}

export default Rating;

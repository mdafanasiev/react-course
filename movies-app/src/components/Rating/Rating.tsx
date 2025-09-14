import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';

function Rating({ ratingValue }: RatingProps) {
	const ratingIcon = '/icons/star.svg';
	return (
		<div className={styles.rating}>
			<img src={ratingIcon} alt="Рейтинг" />
			<div className={styles['rating__value']}>{ratingValue}</div>
		</div>
	);
}

export default Rating;

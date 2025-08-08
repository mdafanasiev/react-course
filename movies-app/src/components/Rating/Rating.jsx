import styles from './Rating.module.css';

function Rating({ ratingValue }) {
	const ratingIcon = '/icons/star.svg';
	return (
		<div className={styles.rating}>
			<img src={ratingIcon} alt="Рейтинг" />
			<span className={styles['rating__value']}>{ratingValue}</span>
		</div>
	);
}

export default Rating;

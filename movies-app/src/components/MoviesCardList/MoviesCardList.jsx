import styles from './MoviesCardList.module.css';

function MoviesCardList( { children} ) {
	return (
		<div className={styles['movies-card-list']}>
			{children}
		</div>
	);
}

export default MoviesCardList;

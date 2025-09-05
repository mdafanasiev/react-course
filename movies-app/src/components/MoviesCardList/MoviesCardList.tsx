import styles from './MoviesCardList.module.css';
import { MoviesCardListProps } from './MoviesCardList.props';

function MoviesCardList( { children}: MoviesCardListProps ) {
	return (
		<div className={styles['movies-card-list']}>
			{children}
		</div>
	);
}

export default MoviesCardList;

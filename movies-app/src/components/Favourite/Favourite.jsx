import styles from './Favourite.module.css';
import cn from 'classnames';

function Favourite({ inFavourites }) {
	
	if (inFavourites) {
		return (
			<div className={styles.favourite}>
				<img src={pathToBookmark()} alt="В избранном" />
				<span className={cn(styles['favourite__info'], styles['favourite__info_active'])}>
          В избранном
				</span>
			</div>
		);
	}

	return (
		<div className={styles.favourite}>
			<img src={pathToLike()} alt="В избранное" />
			<span className={styles['favourite__info']}>В избранное</span>
		</div>
	);
}

export default Favourite;

const pathToLike = () => '/icons/like.svg';

const pathToBookmark = () => '/icons/bookmark.svg';
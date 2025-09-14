import styles from './Favourite.module.css';
import cn from 'classnames';
import { FavouriteProps } from './Favourite.props';

function Favourite({ inFavourites, ...props }: FavouriteProps) {
  if (inFavourites) {
    return (
      <div className={styles.favourite}>
        <button className={styles["fav-button"]} {...props}>
          <img src={pathToBookmark()} alt="В избранном" />
        </button>
        <div
          className={cn(
            styles["favourite__info"],
            styles["favourite__info_active"]
          )}
        >
          В избранном
        </div>
      </div>
    );
  }

  return (
    <div className={styles.favourite}>
      <button className={styles["fav-button"]} {...props}>
        <img src={pathToLike()} alt="В избранное" />
      </button>
      <div className={styles["favourite__info"]}>В избранное</div>
    </div>
  );
}

export default Favourite;

const pathToLike = () => '/icons/like.svg';

const pathToBookmark = () => '/icons/bookmark.svg';
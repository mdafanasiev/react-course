import styles from './MovieInfo.module.css';
import { MovieInfoProps } from './MovieInfo.props';

function MovieInfo({info, value}: MovieInfoProps) {
	return (
    <div className={styles["movie-info"]}>
      <div className={styles.info}>{info}</div>
      <div className={styles.value}>
		{value}
	  </div>
    </div>
  );
}

export default MovieInfo;
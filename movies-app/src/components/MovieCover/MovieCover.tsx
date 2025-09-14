import { MovieCoverProps } from "./MovieCover.props";
import cn from 'classnames';
import styles from './MovieCover.module.css';

function MovieCover( { size, path }: MovieCoverProps) {
	const coversFolder = "/MoviesCovers/";
	return (
    <img
      src={coversFolder + path}
      className={cn({
        [styles.small]: size === "small",
        [styles.big]: size === "big",
      })}
    />
  );
}

export default MovieCover;
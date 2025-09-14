import { MovieCoverProps } from "./MovieCover.props";
import cn from 'classnames';
import styles from './MovieCover.module.css';

function MovieCover( { size, path }: MovieCoverProps) {
	return (
    <img
      src={path}
      className={cn({
        [styles.small]: size === "small",
        [styles.big]: size === "big",
      })}
    />
  );
}

export default MovieCover;
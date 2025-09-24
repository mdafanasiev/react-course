import { useLoaderData } from "react-router-dom";
import TextArea from "../../components/TextArea/TextArea";
import styles from './Movie.module.css'
import Header from "../../components/Header/Header";
import Body from "../../components/Layout/Body/Body";
import { MouseEvent } from "react";
import MovieCover from "../../components/MovieCover/MovieCover";
import Rating from "../../components/Rating/Rating";
import Favourite from "../../components/Favourite/Favourite";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { MovieDetails } from "../../interfaces/movies.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { favoritesActions } from "../../store/favorites.slice";

function Movie() {
  const movie = useLoaderData() as MovieDetails;
  const username = useSelector((s: RootState) => {
    const loggedUser = s.users.find((user) => user.isLogged);
    if (loggedUser) {
      return loggedUser.name;
    }
    return "";
  });

  const dispatch = useDispatch<AppDispatch>();
	const inFavorites = useSelector((s: RootState) => { 
		let result = false;
		const userFavs = s.favorites.find((fav) => fav.username === username);
		if (userFavs) {
			result = userFavs.favList.some((mv) => mv.id === movie.id);
		}
		return result;
	});
  
   const favouritesHandler = function(e: MouseEvent) {
    if (inFavorites) {
      dispatch(
        favoritesActions.removeFromFavorites({
          username: username,
          movieID: movie.id,
        })
      );
    }
    else {
      dispatch(favoritesActions.addToFavorites({ username: username, movie }));
    }
  }

  return (
    <>
      <Body>
        <TextArea>
          <div className={styles["text-content"]}>
            <span className={styles["action-name"]}> Поиск фильмов</span>
            <Header title={movie?.title ?? ""} appearance="medium" />
          </div>
        </TextArea>
        <div className={styles.movie}>
          <div className={styles["movie__cover"]}>
            <MovieCover size="big" path={movie?.image ?? ""} />
          </div>
          <div className={styles["movie__desc"]}>
            <div className={styles["movie__desc_text"]}>
              {movie.description}
            </div>
            <div className={styles["movie__desc_rating"]}>
              <Rating ratingValue={movie?.rating ?? 0} />
              <Favourite
                inFavorites={inFavorites}
                onClick={favouritesHandler}
              />
            </div>
            <MovieInfo info="Тип" value={movie.type} />
            <MovieInfo info="Дата выхода" value={String(movie?.releaseDate)} />
            <MovieInfo
              info="Длительность"
              value={getDuration(movie.duration)}
            />
            <MovieInfo info="Жанр" value={movie.genre.join(", ")} />
          </div>
        </div>
      </Body>
      <div className={styles.comments}>
        <div className={styles.comments__headling}>Отзывы</div>
        <TextArea>
          <div className={styles["comments__text"]}>
            <div className={styles["comments__short-review"]}>
              <div className={styles["comments__short-review_text"]}>
                Not as good as infinity war..
              </div>
              <div className={styles["comments__short-review_date"]}>
                2019-04-29
              </div>
            </div>
            <div>
              But its a pretty good film. A bit of a mess in some parts, lacking
              the cohesive and effortless feel infinity war somehow managed to
              accomplish. Some silly plot holes and characters that
              could&apos;ve been cut (Ahem, captain marvel and thanos). The use
              of Captain marvel in this film was just ridiculous. Shes there at
              the start, bails for some reason? And then pops up at the end to
              serve no purpose but deux ex machina a space ship...
            </div>
          </div>
        </TextArea>
      </div>
    </>
  );
}

export default Movie;


function getDuration(duration: string) {
  const durationStr = duration.slice(2);
  const res = durationStr
    .replace("H", " час ")
    .replace("M", " минут ")
    .replace("S", " секунд ");

  return res;
}
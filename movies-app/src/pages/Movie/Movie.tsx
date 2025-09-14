import { useParams } from "react-router-dom";
import TextArea from "../../components/TextArea/TextArea";
import styles from './Movie.module.css'
import Header from "../../components/Header/Header";
import Body from "../../components/Layout/Body/Body";
import { MoviesContext } from "../../context/movies.context";
import { useContext, useEffect } from "react";
import MovieCover from "../../components/MovieCover/MovieCover";
import Rating from "../../components/Rating/Rating";
import Favourite from "../../components/Favourite/Favourite";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

function Movie() {
  const { id: paramID } = useParams();
  const id = Number(paramID);
  const { movies } = useContext(MoviesContext);
  const movie = movies.find((movie) => movie.id === id);
  return (
    <>
      <Body>
        <TextArea>
          <div className={styles["text-content"]}>
            <span className={styles["action-name"]}> Поиск фильмов</span>
            <Header title={movie?.title ?? ''} appearance="medium" />
          </div>
        </TextArea>
        <div className={styles.movie}>
          <div className={styles["movie__cover"]}>
            <MovieCover size="big" path={movie?.filename ?? ""} />
          </div>
          <div className={styles["movie__desc"]}>
            <div className={styles["movie__desc_text"]}>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </div>
            <div className={styles["movie__desc_rating"]}>
              <Rating ratingValue={movie?.rating ?? 0} />
              <Favourite inFavourites={movie?.inFavourites ?? false} />
            </div>
            <MovieInfo info="Тип" value="Movie" />
            <MovieInfo info="Дата выхода" value="2019-04-24" />
            <MovieInfo info="Длительность" value="181 мин" />
            <MovieInfo
              info="Жанр"
              value="Adventure,  Science Fiction, Action"
            />
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
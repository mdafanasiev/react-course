import Body from "../../components/Layout/Body/Body";
import UpperBody from "../../components/Layout/UpperBody/UpperBody";
import Search from "../../components/Search/Search";
import styles from './ErrorPage.module.css';

function ErrorPage() {
	return (
    <Body>
      <UpperBody>
        <Search />
      </UpperBody>
      <div className={styles.error}>
        <div className={styles["error__text"]}>Упс... Ничего не найдено</div>
        <div className={styles["error__info"]}>Попробуйте изменить запрос или ввести более точное название фильма</div>
      </div>
    </Body>
  );
}

export default ErrorPage;
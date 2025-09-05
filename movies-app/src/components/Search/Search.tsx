import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import styles from './Search.module.css';
import Button from '../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import { MouseEvent } from 'react';

function Search() {
	const searchTitle = 'Поиск';
	const searchText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
	const actionName = 'Искать';
  	const btnClick = (e: MouseEvent) => console.log(e.target);
	
	return (
		<div className={styles.search}>
			<div className={styles['search__info']}>
				<Header title={searchTitle} />
				<Paragraph text={searchText} className="" />
			</div>
			<div className={styles['search__main']}>
				<SearchInput />
				<Button actionName={actionName} onClick={btnClick} />
			</div>
		</div>
	);
}

export default Search;


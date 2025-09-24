import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import styles from './Search.module.css';
import Button from '../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import { MouseEvent, useContext, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { IMovies } from '../../interfaces/movies.interface';
import { MoviesContext } from '../../context/movies.context';
import { MovieCardProps } from '../MovieCard/MovieCard.props';
import { PREFIX_URL } from '../../helpers/API';

function Search() {
	const searchTitle = 'Поиск';
	const searchText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
	const actionName = 'Искать';
	const searchInput = useRef<HTMLInputElement>(null);
	const { setMovies } = useContext(MoviesContext);

  
  	const searchMovies = async (e: MouseEvent) => {
		try {
			const { data } = await axios.get<IMovies>(`${PREFIX_URL}/?q=${searchInput.current?.value}`);	
			const moviesOriginal = data.description;
			const movies: (MovieCardProps["movie"])[] = [];
			moviesOriginal.forEach((mv) => movies.push({id: mv['#IMDB_ID'], title: mv['#TITLE'], image: mv['#IMG_POSTER'], rating: mv['#RANK'], releaseDate: mv['#YEAR']
			}));
			setMovies!(movies);
		} catch (e) {
			if (e instanceof AxiosError) {
				console.error(e);
				return;
			}
		}
	};
	
	return (
		<div className={styles.search}>
			<div className={styles['search__info']}>
				<Header title={searchTitle} appearance='big'/>
				<Paragraph text={searchText} className="" />
			</div>
			<div className={styles['search__main']}>
				<SearchInput ref={searchInput}/>
				<Button actionName={actionName} onClick={searchMovies} />
			</div>
		</div>
	);
}

export default Search;


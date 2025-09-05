import Input from '../Input/Input';
import styles from './SearchInput.module.css';

function SearchInput() {
	const placeHolder = 'Введите название';	
	const icon = {
		src: pathToSearchIcon(),
		alt: 'Поиск'
	};

	return (
		<div className={styles['search-input']}>
			<Input type="search" icon={icon} placeholder={placeHolder} />
		</div>
	);
}

export default SearchInput;

function pathToSearchIcon() {
	return '/icons/search.svg';
}	

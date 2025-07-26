import Input from '../Input/Input';
import './SearchInput.css';

function SearchInput() {
	const placeHolder = 'Введите название';	
	const icon = {
		src: pathToSearchIcon(),
		alt: 'Поиск'
	};

	return (
		<div className="search-input">
			<Input type="search" icon={icon} placeHolder={placeHolder} />
		</div>
	);
}

export default SearchInput;

function pathToSearchIcon() {
	return '/icons/search.svg';
}	

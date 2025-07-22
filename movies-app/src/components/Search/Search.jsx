import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import './Search.css';
import Button from '../Button/Button';

function Search() {
	const placeHolder = 'Введите название';
	const actionName = 'Искать';
	const btnClick = (e) => console.log(e.target);

	return (
		<div className="search">
			<div className="search-input">
				<img src={pathToSearchIcon()} alt="Поиск" />
				<Input type="search" placeHolder={placeHolder} />
			</div>
			<Button actionName={actionName} onClick={btnClick} />
		</div>
	);
}

export default Search;

function pathToSearchIcon() {
	return '/search.svg';
}

import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';
import './Search.css';
import Button from '../Button/Button';

function Search() {
	const placeHolder = 'Введите название';
	const actionName = 'Искать';
	const btnClick = (e) => console.log(e.target);
	const icon = {
		src: pathToSearchIcon(),
		alt: 'Поиск'
	};

	return (
		<div className="search">
			<Input type="search" icon={icon} placeHolder={placeHolder} />
			<Button actionName={actionName} onClick={btnClick} />
		</div>
	);
}

export default Search;

function pathToSearchIcon() {
	return '/search.svg';
}	

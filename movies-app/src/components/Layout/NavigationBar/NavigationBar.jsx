import './NavigationBar.css';
import NavigationElement from '../../NavigationElement/NavigationElement';
import NavigationList from '../../NavigationList/NavigationList';

function NavigationBar() {
	return (
		<nav className="nav-bar">
			<img src="/logo.svg" alt="Логотип" />
			<NavigationList>
				<NavigationElement text="Поиск фильмов" />
				<NavigationElement text="Мои фильмы" />
				<NavigationElement text="Войти" />
			</NavigationList>
		</nav>
	);
}

export default NavigationBar;

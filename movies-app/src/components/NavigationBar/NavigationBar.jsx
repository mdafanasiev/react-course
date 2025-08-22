import styles from './NavigationBar.module.css';
import NavigationElement from '../NavigationElement/NavigationElement';
import NavigationList from '../NavigationList/NavigationList';

function NavigationBar() {
	return (
		<nav className={styles['nav-bar']}>
			<img src="/icons/logo.svg" alt="Логотип" />
			<NavigationList>
				<NavigationElement text="Поиск фильмов" />
				<NavigationElement text="Мои фильмы" />
				<div className={styles.login}>
					<NavigationElement text="Войти" />
					<img src='/icons/login.svg' alt='Войти в личный кабинет' />
				</div>
			</NavigationList>
		</nav>
	);
}

export default NavigationBar;

import styles from './NavigationBar.module.css';
import NavigationElement from '../NavigationElement/NavigationElement';
import NavigationList from '../NavigationList/NavigationList';


function NavigationBar({ users, dispatchUsers } ) {
	
	const logout = function () {
		console.log(dispatchUsers);
		dispatchUsers({
			type: 'logout'
		});
	};

	return (
		<nav className={styles['nav-bar']}>
			<img src="/icons/logo.svg" alt="Логотип" />
			<NavigationList>
				<NavigationElement text="Поиск фильмов" />
				<NavigationElement text="Мои фильмы" />
				{!users.some((user) => user.isLogged)? (
					<div className={styles.login}>
						<NavigationElement text="Войти" />
						<img src="/icons/login.svg" alt="Войти в личный кабинет" />
					</div>
				) : (
					<div className={styles.login}>
						<div className={styles.login__user}>
							<NavigationElement text={users.find((u) => u.isLogged)?.name} />
							<img src="/icons/user.svg" alt="Иконка пользователя" />
						</div>
						<NavigationElement text="Выйти" onClick={logout} />
					</div>
				)}
			</NavigationList>
		</nav>
	);
}

export default NavigationBar;

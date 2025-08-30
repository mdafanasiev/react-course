import styles from './NavigationBar.module.css';
import NavigationElement from '../NavigationElement/NavigationElement';
import NavigationList from '../NavigationList/NavigationList';
import { useEffect, useReducer } from 'react';
import { USER_INITIAL_STATE, usersReducer } from '../../App.state.js';

function NavigationBar() {
	const [users, dispatchUsers] = useReducer(usersReducer, USER_INITIAL_STATE);

	const logout = function () {
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
				{!users.users.length ? (
					<div className={styles.login}>
						<NavigationElement text="Войти" />
						<img src="/icons/login.svg" alt="Войти в личный кабинет" />
					</div>
				) : (
					<div className={styles.login}>
						<div className={styles.login__user}>
							<NavigationElement text={users.users.find((u) => u.isLogged).name} />
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

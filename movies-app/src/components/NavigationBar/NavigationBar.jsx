import styles from './NavigationBar.module.css';
import NavigationElement from '../NavigationElement/NavigationElement';
import NavigationList from '../NavigationList/NavigationList';
import { UserContext } from '../../context/user.context';
import { useContext, useEffect } from 'react';


function NavigationBar() {
	const { userName, setUserName } = useContext(UserContext);
	
	useEffect(() => {
		const userList = JSON.parse(localStorage.getItem('users')) ?? [];
		if (userList.length > 0) {
			const loggedUser = userList.find((user) => user.isLogged);
			if (loggedUser)
				setUserName(loggedUser.name);
		} 
	}, []);


	const logout = function () {
		const loginKey = 'users';
		let users = JSON.parse(localStorage.getItem(loginKey)) ?? [];
		users.map((user) => { 
			if (user.isLogged) user.isLogged = false;
		});
		localStorage.setItem(loginKey, JSON.stringify(users));
		setUserName('');
	};

	return (
		<nav className={styles['nav-bar']}>
			<img src="/icons/logo.svg" alt="Логотип" />
			<NavigationList>
				<NavigationElement text="Поиск фильмов" />
				<NavigationElement text="Мои фильмы" />
				{userName === '' ? (
					<div className={styles.login}>
						<NavigationElement text="Войти" />
						<img src="/icons/login.svg" alt="Войти в личный кабинет" />
					</div>
				) : (
					<>
						<div className={styles.login}>
							<div className={styles.login__user}>
								<NavigationElement text={userName} />
								<img src="/icons/user.svg" alt="Иконка пользователя" />
							</div>
							<NavigationElement text="Выйти" onClick={logout} />
						</div>
					</>
				)}
			</NavigationList>
		</nav>
	);
}

export default NavigationBar;

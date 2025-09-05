import {useContext, useRef } from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Input from '../Input/Input';
import styles from './Login.module.css';
import { UserContext } from '../../context/user.context';

function Login() {
	const title = 'Вход';
	const { setUserName } = useContext(UserContext);
	
	const inputRef = useRef();
	const btnRef = useRef();
	
	const login = function() {
		const loginKey = 'users';
		const username = inputRef.current.value;
		let users = JSON.parse(localStorage.getItem(loginKey)) ?? [];
		let currentUser = users.find((user) => user.name === username);
		
		if (currentUser) {
			users.map((user) => user === currentUser ? user.isLogged = true : user.isLogged = false);
			localStorage.setItem(loginKey, JSON.stringify(users));
		}
		else {
			currentUser = { name: username, isLogged: true };
			users.push(currentUser);
			users.map((user) => { if(user !== currentUser) user.isLogged = false;});
			localStorage.setItem(loginKey, JSON.stringify(users));
		}


		setUserName(inputRef.current.value);
		inputRef.current.value = '';	
	};

	return (
		<div className={styles.login}>
			<Header title={title} />
			<Input
				ref={inputRef}
				type="text"
				placeHolder="Ваше имя"
			/>
			<Button ref={btnRef} actionName="Войти в профиль" onClick={login} />
		</div>
	);
}

export default Login;

import {useRef } from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Input from '../Input/Input';
import styles from './Login.module.css';

function Login({ users, dispatchUsers }) {
	const title = 'Вход';
	
	const inputRef = useRef();
	const btnRef = useRef();
	
	const login = function() {
		dispatchUsers({type: 'login', payload: {
			name: inputRef.current.value
		}});
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

import styles from './NavigationBar.module.css';
import { useContext, useEffect } from 'react';
import NavigationElement from '../NavigationElement/NavigationElement';
import NavigationList from '../NavigationList/NavigationList';
import { UserContext } from '../../context/user.context';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


function NavigationBar() {
	const { userName, setUserName } = useContext(UserContext);
  const favCount = useSelector((s: RootState) => {
    const userFavs = s.favorites.find((fav) => fav.username === userName);
    if (userFavs) {
      return userFavs.favList.length;
    }
    return 0;
  });
	type UserInfo = {
      name: string;
      isLogged: boolean;
    };

	let users: UserInfo[];

	useEffect(() => {
    const loginKey: string = "users";
    const items = localStorage.getItem(loginKey);

    if (items) users = JSON.parse(items);
    else users = [];

    if (users.length > 0) {
      const loggedUser = users.find((user) => user.isLogged);
      if (loggedUser) {
        setUserName!(loggedUser.name);
      } 
    }
  }, []);

	const logout = function () {
		const loginKey = 'users';
		const items = localStorage.getItem(loginKey);

		if (items) 
			users = JSON.parse(items);
		else 
			users = [];
		
		users.map((user) => { 
			if (user.isLogged) user.isLogged = false;
		});
		localStorage.setItem(loginKey, JSON.stringify(users));
		setUserName!('');
	};

	return (
    <nav className={styles["nav-bar"]}>
      <img src="/icons/logo.svg" alt="Логотип" />
      <NavigationList>
        <NavLink to="/">
          <NavigationElement text="Поиск фильмов" />
        </NavLink>
        <div className={styles.fav}>
          <NavLink to="/favorites">
            <NavigationElement text="Мои фильмы" />
          </NavLink>
          {favCount > 0 && (
            <div className={styles["fav-count"]}>{favCount}</div>
          )}
        </div>
        {userName === "" ? (
          <div className={styles.login}>
            <NavLink to="/login">
              <NavigationElement text="Войти" />
            </NavLink>
            <img src="/icons/login.svg" alt="Войти в личный кабинет" />
          </div>
        ) : (
          <>
            <div className={styles.login}>
              <div className={styles.login__user}>
                <NavigationElement text={userName} />
                <img src="/icons/user.svg" alt="Иконка пользователя" />
              </div>
              <NavLink to="/login" onClick={logout}>
                <NavigationElement text="Выйти" />
              </NavLink>
            </div>
          </>
        )}
      </NavigationList>
    </nav>
  );
}

export default NavigationBar;

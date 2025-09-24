import styles from './NavigationBar.module.css';
import { useEffect } from 'react';
import NavigationElement from '../NavigationElement/NavigationElement';
import NavigationList from '../NavigationList/NavigationList';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';


function NavigationBar() {
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector((s : RootState) => {
    const loggedUser = s.users.find((user) => user.isLogged);
    if (loggedUser) {
      return loggedUser.name;
    }
    return ''    
  });

  const favCount = useSelector((s: RootState) => {
    const userFavs = s.favorites.find((fav) => fav.username === username);
    if (userFavs) {
      return userFavs.favList.length;
    }
    return 0;
  });

	const logout = function () {
    dispatch(userActions.logout());
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
        {username === "" ? (
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
                <NavigationElement text={username} />
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

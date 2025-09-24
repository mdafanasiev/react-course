
import { useRef } from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import styles from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";

function LoginPage() {
  const title = "Вход";
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);


  const login = function () {
    const username = inputRef.current ? inputRef.current.value : "";
    dispatch(userActions.login({ username }));
    inputRef.current!.value = "";
  };

  return (
    <div className={styles.login}>
      <Header title={title} appearance="big" />
      <Input ref={inputRef} type="text" placeholder="Ваше имя" />
      <Button ref={btnRef} actionName="Войти в профиль" onClick={login} />
    </div>
  );
}

export default LoginPage;

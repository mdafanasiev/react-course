import { AnyActionArg, ReducerState } from "react";

export const USER_INITIAL_STATE = [];

type UserInfo = {
  name: string;
  isLogged: boolean;
};

export function usersReducer(state: unknown, action: {type: string, payload?: {name: string}}) {
  const loginKey = "users";
  let users: UserInfo[] =
    JSON.parse(localStorage.getItem(loginKey) ?? "") ?? [];
  switch (action.type) {
    case "login": {
      const userName = action.payload?.name ?? '';
      let currentUser = users.find((user) => user.name === userName);
      if (currentUser) {
        users.map((user) =>
          user === currentUser
            ? (user.isLogged = true)
            : (user.isLogged = false)
        );
        localStorage.setItem(loginKey, JSON.stringify(users));
        return users;
      }
      users.push({ name: userName, isLogged: true });
      localStorage.setItem(loginKey, JSON.stringify(users));
      return users;
    }
    case "logout": {
      users.map((user) => {
        if (user.isLogged) user.isLogged = false;
      });
      localStorage.setItem(loginKey, JSON.stringify(users));
      return users;
    }
  }
}
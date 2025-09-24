import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadUsers} from "./storage";
import { UserInfo } from "../interfaces/user.interface";

const initialState: UserInfo[] = loadUsers();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string }>) => {
      let currentUser = state.find(
        (user) => user.name === action.payload.username
      );

      if (currentUser) {
        state.map((user) =>
          user === currentUser
            ? (user.isLogged = true)
            : (user.isLogged = false)
        );
      } else {
        currentUser = { name: action.payload.username, isLogged: true };
        state.push(currentUser);
        state.map((user) => {
          if (user !== currentUser) user.isLogged = false;
        });
      }
    },

    logout: (
      state
    ) => {
		state.map((user) => {
		if (user.isLogged) 
			user.isLogged = false;});
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;

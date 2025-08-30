export const USER_INITIAL_STATE = {
	users: []
};

export function usersReducer(state, action) {
	const loginKey = 'users';
	let users = JSON.parse(localStorage.getItem(loginKey)) ?? [];
	switch(action.type) {
	case 'login': {
		const userName = action.payload?.name;
		let currentUser = users.find((user) => user.name === userName);
		if (currentUser) {
			users.map((user) => user === currentUser ? user.isLogged = true : user.isLogged = false);
			localStorage.setItem(loginKey, JSON.stringify(users));
			return {users: users};
		}
		users.push({ name: userName, isLogged: true });
		localStorage.setItem(loginKey, JSON.stringify(users));
		return {users: users};
	}
	case 'logout': {
		users.map((user) => { 
			if (user.isLogged) user.isLogged = false;
		});
		localStorage.setItem(loginKey, JSON.stringify(users));
		return {users: users};	
	}
	}
}
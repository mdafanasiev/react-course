import { ReactNode } from "react";
import { UserInfo } from "../interfaces/user.interface";
import { Navigate } from "react-router-dom";

function RequiredAuth( {children}: {children: ReactNode}) {
	const users: UserInfo[] = JSON.parse(localStorage.getItem('users') ?? "[]");
	if (users) {
		const currentUser = users.find((userInfo) => userInfo.isLogged);
		if (currentUser) {
			return <>{children}</>
		}
	}

	return <Navigate to='/login' replace />;
}

export default RequiredAuth;
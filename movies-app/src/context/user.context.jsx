import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({ userName: ''});

export const UserContextProvider = ({children}) => {
	const [userName, setUserName] = useState('');
	
	return <UserContext.Provider value = {{userName, setUserName}}>
		{children}
	</UserContext.Provider>;
};

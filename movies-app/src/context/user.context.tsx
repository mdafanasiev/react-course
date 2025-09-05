import { createContext, ReactNode, useState,  Dispatch, SetStateAction, Context} from 'react';

type UserContextType = {userName: string, setUserName: Dispatch<SetStateAction<string>> | null};
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  userName: "",
  setUserName: null,
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");

  const userContextValue: UserContextType = { userName, setUserName };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

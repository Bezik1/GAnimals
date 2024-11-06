import { createContext, useContext, useState } from "react";
import { UserContextType } from "../components/types/Contexts";
import { ParentProps } from "../components/types/Props";
import { User } from "../components/types/Data";

const UserContext = createContext<UserContextType>({
    user: undefined,
    setUser: undefined
})

export const UserProvider = ({ children } : ParentProps) =>{
    const [user, setUser] = useState<User>()

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () =>{
    const { user, setUser } = useContext(UserContext)

    if(typeof setUser === 'undefined') throw new Error('Element is outside User Provider')

    return { user, setUser }
}
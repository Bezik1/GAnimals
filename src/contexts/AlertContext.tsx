import { createContext, useContext, useState } from "react";
import { ParentProps } from "../components/types/Props";
import { AlertContextType } from "../components/types/Contexts";

const AlertContext = createContext<AlertContextType>({
    alert: "",
    setAlert: undefined
})

export const AlertProvider = ({ children } : ParentProps) =>{
    const [alert, setAlert] = useState<string>("")

    return (
        <AlertContext.Provider value={{alert, setAlert}}>
            { children }
        </AlertContext.Provider>
    )
}

export const useAlert = () =>{
    const { alert, setAlert } = useContext(AlertContext)

    if(typeof setAlert === 'undefined') throw new Error('Element is outside Alert Provider')

    const setNewAlert = (message: string) => {
        setAlert(message);
        setTimeout(() => {
            setAlert("");
        }, 6000);
    };

    return { alert, setNewAlert }
}
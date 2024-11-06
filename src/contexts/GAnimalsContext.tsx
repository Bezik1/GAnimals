import { createContext, useContext, useState } from "react";
import { GAnimalsContextType } from "../components/types/Contexts";
import { ParentProps } from "../components/types/Props";
import { GAnimal } from "../components/types/Data";

const GAnimalsContext = createContext<GAnimalsContextType>({
    ganimals: [],
    setGAnimals: undefined
})

export const GAnimalsProvider = ({ children } : ParentProps) =>{
    const [ganimals, setGAnimals] = useState<GAnimal[]>([])

    return (
        <GAnimalsContext.Provider value={{ganimals, setGAnimals}}>
            { children }
        </GAnimalsContext.Provider>
    )
}

export const useGAnimals = () =>{
    const { ganimals, setGAnimals } = useContext(GAnimalsContext)

    if(typeof setGAnimals === 'undefined') throw new Error('Element is outside GAnimals Provider')

    return { ganimals, setGAnimals }
}
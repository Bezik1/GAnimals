import { GAnimal, User } from "./Data"

export type AlertContextType = {
    alert: string
    setAlert:  React.Dispatch<React.SetStateAction<string>> | undefined
}

export type UserContextType = {
    user: User | undefined
    setUser:  React.Dispatch<React.SetStateAction<User | undefined>> | undefined
}

export type GAnimalsContextType = {
    ganimals: GAnimal[]
    setGAnimals:  React.Dispatch<React.SetStateAction<GAnimal[]>> | undefined
}
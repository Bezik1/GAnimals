import { useRef } from "react"
import { Ganimal } from "../../assets/Ganimal"
import { variants } from "../../const/animation"
import { GAnimal } from "../types/Data"
import ConditionGate from "../UI/ConditionGate"
import Input from "../UI/Input"
import "./index.css"
import { useAlert } from "../../contexts/AlertContext"
import { useUser } from "../../contexts/UserContext"
import axios from "axios"
import { BREED_ANIMAL_USER_API_URL } from "../../const/api"

type BreedingMenuProps = {
    potentialPartner: GAnimal | undefined
    direction: number
    child: GAnimal | undefined
    ganimals: GAnimal[]
    currentGanimalIndex: number
    setChild: React.Dispatch<React.SetStateAction<GAnimal | undefined>>
}

const BreedingMenu = ({ potentialPartner, direction, child, ganimals, currentGanimalIndex, setChild } : BreedingMenuProps) =>{
    const { user } = useUser()
    const { setNewAlert } = useAlert()
    const passwordInputRef = useRef<HTMLInputElement>(null!)
    const animalNameInputRef = useRef<HTMLInputElement>(null!)

    const handleBreed = async () =>{
        try {
            if(!user) { setNewAlert("User is not logged in!"); return; }
            if(!potentialPartner) { setNewAlert("There is no potential partner!"); return; }

            const { email: userEmail } = user

            const animalName = animalNameInputRef.current.value;
            const userPassword = passwordInputRef.current.value;

            const firstParentId = ganimals[currentGanimalIndex].id
            const secondParentId = potentialPartner.id

            const breedingReq = {
                amount: 12.0,
                userEmail,
                userPassword,
                animalName,
                firstParentId,
                secondParentId,
            }

            console.log(breedingReq)

            const res = await axios.post<GAnimal>(BREED_ANIMAL_USER_API_URL, breedingReq)

            if(res.status != 200) { setNewAlert("Breeding failed!"); return; }
            setChild(res.data)
            console.log(res.data)
        } catch(err) {
            console.log(err)
            setNewAlert(`Error while connecting to breeding route: ${err}`)
        }
        }

    return (
    <ConditionGate condition={potentialPartner != undefined}>
        <div className='breeding-btn-container'>
            <ConditionGate condition={child != undefined}>
                <Ganimal
                className='ganimal-child'
                variants={variants}
                custom={direction}
                genome={String(child?.genome)}
                />
            </ConditionGate>
            <ConditionGate condition={!child}>
                <svg
                    className='breeding-btn'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={potentialPartner ? "currentColor" : "none"}
                    onClick={handleBreed}
                >
                    <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='breeding-transaction-inputs'>
                    <Input ref={animalNameInputRef} className='breeding-transaction-input' placeholder='New Animal Name'/>
                    <Input ref={passwordInputRef} className='breeding-transaction-input' placeholder='Password' type='password'/>
                </div>
            </ConditionGate>
        </div>
    </ConditionGate>
    )
}

export default BreedingMenu
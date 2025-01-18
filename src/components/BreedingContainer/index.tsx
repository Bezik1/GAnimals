import { GAnimal, Genom } from "../types/Data"
import GenderComponent from "../UI/GenderComponent"
import SwitchTitle from "../UI/SwitchTitle"
import "./index.css"

type BreedingContainerProps = {
    ganimals: GAnimal[]
    breedersListActive: boolean
    currentInfoGanimalShow: GAnimal
    gender: boolean
    handleBreedingPrepare: (ganimal: GAnimal) => void
}

const BreedingContainer = ({ ganimals, breedersListActive, currentInfoGanimalShow, gender, handleBreedingPrepare } : BreedingContainerProps) =>{
    return (
        <div
            className='breeder-container'
            style={{
                background: "#1f2127",
                transition: ".25s",
                opacity: breedersListActive ? 1 : 0,
            }}
        >
            <div
                className='breed-title'
                style={{ color: !Genom.analyzeParentString(currentInfoGanimalShow.genome).gender ? "#63b6ff" : "#fb475f"}}>
                Potential Partners
            </div>
            {ganimals.map(ganimal => Genom.analyzeParentString(ganimal.genome).gender != gender && (
                <SwitchTitle
                    baseColor="#fb475f"
                    conditionColor="#63b6ff"
                    condition={Genom.analyzeParentString(ganimal.genome).gender}
                    title={ganimal.name}
                    func={() => handleBreedingPrepare(ganimal)}
                >
                    <GenderComponent gender={Genom.analyzeParentString(ganimal.genome).gender}/>
                </SwitchTitle>
            ))}
        </div>
    )
}

export default BreedingContainer
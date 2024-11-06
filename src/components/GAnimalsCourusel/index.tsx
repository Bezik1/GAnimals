import { useEffect, useState } from "react"
import { Ganimal } from "../../assets/Ganimal"
import { variants } from "../../const/animation"
import { GAnimal } from "../types/Data"
import Arrow from "../UI/Arrow"
import ConditionGate from "../UI/ConditionGate"
import "./index.css"
import { CloseBtn } from "../UI/CloseBtn"

type GAnimalsCouruselProps = {
    direction: number
    ganimals: GAnimal[]
    currentGanimalIndex: number
    child: GAnimal | undefined
    potentialPartner: GAnimal | undefined
    setCurrentGanimalIndex: React.Dispatch<React.SetStateAction<number>>
    setCurrentInfoGanimalShow: React.Dispatch<React.SetStateAction<GAnimal>>
    setDirection: React.Dispatch<React.SetStateAction<1 | -1>>
    handleClose: () => void
}

const GAnimalsCourusel = ({ handleClose, child, currentGanimalIndex, direction, ganimals, potentialPartner, setCurrentGanimalIndex, setCurrentInfoGanimalShow, setDirection } : GAnimalsCouruselProps) =>{
    const handleClick = (type: string) => {
        let index = currentGanimalIndex
        if(type === "right") {
            index = ((currentGanimalIndex + 1) % ganimals.length)

            if(ganimals[index] === potentialPartner) {
                index = (index + 1) % ganimals.length
            }
        } else {
            index = (
            currentGanimalIndex === 0
                ? ganimals.length - 1
                : (currentGanimalIndex - 1) % ganimals.length
            )
            if(ganimals[index] === potentialPartner) {
                index = (
                    currentGanimalIndex === 0
                        ? ganimals.length - 2
                        : (currentGanimalIndex - 2) % ganimals.length
                )
            }
        }
        setCurrentGanimalIndex(index)
        setCurrentInfoGanimalShow(ganimals[index])
        setDirection(type === "right" ? 1 : -1)
    }

    return (
        <div className='ganimal-image-container'>
            <div className='arrow-box'>
                <Arrow side="left" handleClick={handleClick}/>
                <Arrow side="right" handleClick={handleClick} />
            </div>
            <Ganimal
                custom={direction}
                variants={variants}
                className={`ganimal ${potentialPartner && "ganimal-partner-1"}`}
                genome={ganimals[currentGanimalIndex].genome}
            />
            <ConditionGate condition={child != undefined}>
                <Ganimal
                    rotated={true}
                    className='ganimal ganimal-partner-2'
                    custom={direction}
                    variants={variants}
                    genome={String(child?.genome)}
                />
            </ConditionGate>
            <ConditionGate condition={potentialPartner != undefined}>
                <Ganimal
                    rotated={true}
                    className='ganimal ganimal-partner-2'
                    custom={direction}
                    variants={variants}
                    genome={String(potentialPartner?.genome)}
                />
                <CloseBtn handleClick={handleClose}/>
            </ConditionGate>
        </div>
    )
}

export default GAnimalsCourusel
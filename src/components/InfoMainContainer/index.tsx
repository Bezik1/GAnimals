import { GAnimal, Genom } from "../types/Data"
import ConditionGate from "../UI/ConditionGate"
import InfoContainer from "../UI/InfoContainer"
import InfoText from "../UI/InfoText"
import "./index.css"
import ColorBox from "../UI/ColorBox"
import ConditionSvg from "../UI/ConditionSvg"
import GenderComponent from "../UI/GenderComponent"
import { DownloadBtn } from "../UI/DownloadBtn"

type InfoContainerProps = {
    menuActive: boolean
    ganimals: GAnimal[]
    currentGanimalIndex: number
    potentialPartner: GAnimal | undefined
    child: GAnimal | undefined
    currentInfoGanimalShow: GAnimal
    setCurrentInfoGanimalShow: React.Dispatch<React.SetStateAction<GAnimal>>
}

const InfoMainContainer = ({ menuActive, currentInfoGanimalShow, ganimals, currentGanimalIndex, potentialPartner, child, setCurrentInfoGanimalShow } : InfoContainerProps) =>{
    const { name, genome: genomeString } = currentInfoGanimalShow
    const {
        baseColor,
        eyeColor,
        gender,
        hasClaws,
        hasSpikes,
        isCarnivour,
        specialColor
    } = Genom.analyzeParentString(genomeString)

    return (
        <div className='ganimal-info-main-container'>
            <div
                className='info-container'
                style={{
                background: "#1f2127",
                transition: ".25s",
                opacity: menuActive ? 1 : 0,
                }}
            >
                <div className='choose-ganimal-container'>
                    <div
                    className={`choose-ganimal ${currentInfoGanimalShow === ganimals[currentGanimalIndex] && 'choosen-ganimal'}`}
                    onClick={() => setCurrentInfoGanimalShow(ganimals[currentGanimalIndex])}
                    >
                    {ganimals[currentGanimalIndex].name}
                    </div>
                        <ConditionGate condition={potentialPartner != undefined}>
                    <div
                        className={`choose-ganimal ${currentInfoGanimalShow === potentialPartner && 'choosen-ganimal'}`}
                        onClick={() => potentialPartner && setCurrentInfoGanimalShow(potentialPartner)}
                    >
                        {String(potentialPartner?.name)}
                    </div>
                    </ConditionGate>
                    <ConditionGate condition={child != undefined}>
                        <div
                            className={`choose-ganimal ${currentInfoGanimalShow === child && 'choosen-ganimal'}`}
                            onClick={() => child && setCurrentInfoGanimalShow(child)}
                        >
                            {String(child?.name)}
                        </div>
                    </ConditionGate>
                </div>
                <div className='properties-1'>
                    <InfoContainer property='Name'>
                        <InfoText>{name}</InfoText>
                    </InfoContainer>
                    {/* <InfoContainer property='Genome'>
                        <InfoText>{genomeString}</InfoText>
                    </InfoContainer> */}
                </div>
                <div className='properties-2'>
                    <div className='colors'>
                        <InfoContainer property="Base Color">
                            <ColorBox color={baseColor} />
                        </InfoContainer>
                        <InfoContainer property="Special Color">
                            <ColorBox color={specialColor} />
                        </InfoContainer>
                        <InfoContainer property="Eye Color">
                            <ColorBox color={eyeColor} />
                        </InfoContainer>
                    </div>
                    <div className='boolean-properties'>
                        <InfoContainer property="Claws">
                            <ConditionSvg value={hasClaws} />
                        </InfoContainer>
                        <InfoContainer property="Spikes">
                            <ConditionSvg value={hasSpikes} />
                        </InfoContainer>
                        <InfoContainer property="Carnivour">
                            <ConditionSvg value={isCarnivour} />
                        </InfoContainer>
                    </div>
                </div>
                <InfoContainer className='gender-container' property='Gender'>
                    <div className='ganimal-gender'><GenderComponent gender={gender}/></div>
                </InfoContainer>
            </div>
        </div>
    )
}

export default InfoMainContainer
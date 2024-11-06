import { ParentProps } from "../../types/Props"
import InfoText from "../InfoText"
import "./index.css"

const InfoContainer = ({ children, property, className } : ParentProps & { property: string, className?: string }) =>{
    return (
        <div className={`ganimal-info-container ${className}`}>
            <InfoText>{property}: </InfoText>
            {children}
        </div>
    )
}

export default InfoContainer
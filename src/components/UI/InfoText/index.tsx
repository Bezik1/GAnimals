import { ParentProps } from "../../types/Props"
import "./index.css"

const InfoText = ({ children } : ParentProps) =>(
    <div className='ganimal-info'>{children}</div>
)

export default InfoText
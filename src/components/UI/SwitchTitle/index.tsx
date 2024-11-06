import { ParentProps } from "../../types/Props"
import "./index.css"

const SwitchTitle = ({ children, condition, baseColor, conditionColor, func, title } :
    ParentProps & { condition: boolean, baseColor: string, conditionColor: string, func?: () => void, title: string }) =>(
        <div className='breed-element'>
            {children}
            <div
                onClick={func}
                className='breed-element-title'
                style={{
                    color: condition
                    ? conditionColor
                    : baseColor
                }}
            >
                {title}
            </div>
        </div>
)

export default SwitchTitle
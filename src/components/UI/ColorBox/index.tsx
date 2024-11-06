import { Color } from "../../types/Data"
import "./index.css"

const ColorBox = ({ color } : { color: Color }) =>{
    return (
        <div className='color-box' style={{ background: color.hex }} />
    )
}

export default ColorBox
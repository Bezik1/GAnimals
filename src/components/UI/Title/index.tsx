import { ParentProps } from "../../types/Props"
import "./index.css"

const Title = ({ className, children } : ParentProps & { className?: string }) =>{
    return (
        <div className={`title-container ${className}`}>
            <h1 className="title-text">{children}</h1>
        </div>
    )
}

export default Title
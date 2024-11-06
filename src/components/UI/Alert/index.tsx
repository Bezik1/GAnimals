import { useAlert } from "../../../contexts/AlertContext"
import "./index.css"

const Alert = ({ className } : { className?: string }) =>{
    const { alert } = useAlert()

    return (
        <div className={`alert-container ${className}  ${alert !== "" && "activate"}`}>
            <div className="alert-text">{alert}</div>
        </div>
    )
}

export default Alert
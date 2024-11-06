import { ParentProps } from "../../../types/Props"
import "./index.css"

const LoadingGate = ({ children, loading, size } : ParentProps & { loading: boolean, size?: number }) =>{
    return loading ? <div className="loading" style={{ width: size, height: size }} /> : children
}

export default LoadingGate
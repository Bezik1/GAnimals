import { useModal } from "../../../contexts/ModalContext"
import { ParentProps } from "../../../types/Props"
import "./index.css"

export const Modal = ({ children, className } : ParentProps & { className?: string }) =>{
    const { visible } = useModal()

    return visible && (
        <div className={`modal ${className}`}>
            {children}
        </div>
    )
}
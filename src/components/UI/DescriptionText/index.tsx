import "./index.css"

export const DescriptionText = ({ text, icon, className } : { text: string, icon?: JSX.Element, className?: string }) =>{
    return (
        <div className={`description-text ${className}`}>
                {icon}
                <div className="user-login">{text}</div>
        </div>
    )
}
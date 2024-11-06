import "./index.css"
import { TITLE_MAX_SIZE } from "../../../const/text"

export const TextTitle = ({ title, className } : { title: string, className?: string }) =>{
    const titleLengthCondition = title.length > TITLE_MAX_SIZE-1 && "..."

    return (
        <div className={`title ${className}`}>
            {title.substring(0, TITLE_MAX_SIZE)}{titleLengthCondition && "..." }
        </div>
    )
}
import "./index.css"

export const CloseBtn = ({ className, handleClick } : { className?: string, handleClick: () => void }) =>(
    <svg className={`close-btn ${className}`} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)
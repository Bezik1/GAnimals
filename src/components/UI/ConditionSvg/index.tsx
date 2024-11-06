import "./index.css"

const ConditionSvg = ({ value } : { value: boolean }) =>{
    if(value) {
        return (
            <svg className="condition-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#28f693" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    } else {
        return (
            <svg className="condition-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6L18 18" stroke="#f6287a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    }
}

export default ConditionSvg
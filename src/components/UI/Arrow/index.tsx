import "./index.css"

const Arrow = ({ side, handleClick } : { side: 'left' | 'right', handleClick: (side: string) => void }) =>{
    return side === "right"
        ? (
            <svg className='arrow' onClick={() => handleClick("right")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
        : (
            <svg onClick={() => handleClick("left")} className='arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
}

export default Arrow
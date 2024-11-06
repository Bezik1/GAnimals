import './index.css';

const Submit= ({ className, label, onClick } : { className?: string, label: string, onClick: () => void }) => {
    return (
        <div className="submit-container">
            <div className='sub-btn' />
            <button type="button" className={`submit-btn ${className}`} onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

export default Submit;

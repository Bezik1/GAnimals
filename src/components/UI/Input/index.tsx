import React from "react";
import "./index.css";

const Input = React.forwardRef<HTMLInputElement, {
    className?: string;
    placeholder?: string;
    defaultValue?: string;
    type?: string
}>(({ className, placeholder, defaultValue, type }, ref) => {
    return (
        <div className={`input-container ${className}`}>
            <input
                type={type}
                ref={ref}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={`input ${className}`}
            />
        </div>
    );
});

export default Input;

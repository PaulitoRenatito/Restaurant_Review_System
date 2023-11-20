import React, { useState } from 'react';
import './custom-input.css';

interface CustomInputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
    type?: 'text' | 'password'; // Tipo opcional, assume 'text' como padrão
}

const CustomInput = ({ label, value, updateValue, type = 'text' }: CustomInputProps) => {
    const isPasswordType = type === 'password';

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClicked = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    return (
        <div className='custom-input-overlay'>
            <label className='custom-input-title'>{label}</label>
            <div className='custom-input-container'>
                <input
                    className='custom-field'
                    type={isButtonClicked && isPasswordType ? 'text' : type}
                    value={value}
                    onChange={(event) => updateValue(event.target.value)}
                />
                {isPasswordType && (
                    <i
                        className={`fa ${isButtonClicked ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={handleButtonClicked}
                        aria-hidden="true"
                    ></i>
                )}
            </div>
        </div>
    );
};

export default CustomInput;
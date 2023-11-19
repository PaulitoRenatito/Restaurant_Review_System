
import { useState } from 'react';
import './password-input.css'

interface PasswordInputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void,
}
const PasswordInput = ({ label, value, updateValue }: PasswordInputProps) => {

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClicked = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    return (
        <>
            <label className='password-input-title'>{label}</label>
            <div className='password-input-container'>
                <input className='password-field' type={isButtonClicked ? 'password' : 'text'} value={value} onChange={event => updateValue(event.target.value)}></input>
                <i className={`fa ${isButtonClicked ? 'fa-eye-slash' : 'fa-eye'}`} onClick={handleButtonClicked} aria-hidden="true"></i>
            </div >
        </>
    )
}

export default PasswordInput
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import axios, { AxiosError } from 'axios';
import CustomInput from '../input/CustomInput'
import { useState } from 'react';
import { useUserMutate } from '../../hooks/post/useUserMutate';
import { UserData } from '../../interface/UserData';

export function Register() {

    const navigate = useNavigate();

    const { mutate } = useUserMutate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const userData: UserData = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            }

            await mutate(userData);

            navigate('/');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Exiba mensagens de erro com base na resposta do servidor
                console.error('Erro no registro:', error.response?.data || error.message);
                // Você pode exibir mensagens de erro ao usuário aqui
            }
            else {
                // Se não for um erro do Axios, trate-o de acordo (por exemplo, apenas registre no console)
                console.error('Erro no registro:', error);
            }
        }
    };

    const handleGoBackToLogin = () => {
        navigate('/');
    };

    return (
        <div className='register-container'>
            <CustomInput label='Primeiro Nome' value={firstName} updateValue={setFirstName} />
            <CustomInput label='Ultimo Nome' value={lastName} updateValue={setLastName} />
            <CustomInput label='Email' value={email} updateValue={setEmail} />
            <CustomInput label='Senha' value={password} updateValue={setPassword} type='password' />
            <div className="button-container">
                <button className='register-button' onClick={handleGoBackToLogin}>Voltar</button>
                <button className='register-button' onClick={handleRegister}>Registrar</button>
            </div>
        </div>
    )
}
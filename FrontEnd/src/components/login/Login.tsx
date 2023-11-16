
import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react';
import { getUserByNameAndPassword } from '../../hooks/getUserByNameAndPassword';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userQuery = getUserByNameAndPassword(username, password);

    return (
        <div className='login-container'>
            <div className="input-container">
                <p className='input-title'>Nome de Usuário</p>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-container">
                <p className='input-title'>Senha</p>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="button-container">
                <Link to='/registerpage' className='link-container'>
                    <button className='login-button'>Registrar</button>
                </Link>
                <Link to='/main' className='link-container'>
                    <button className='login-button'>Login</button>
                </Link>
            </div>
        </div>
    );
}

import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react';
import API_URL from '../../utils/config';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import PasswordInput from '../input/PasswordInput';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL + '/user/auth', {
        username: username,
        password: password,
      });

      updateUser(response.data.id)
      navigate('/main');
    }
    catch (error) {
      console.error('Falha no login', error);
    }
  };

  const handleRegister = () => {
    navigate('/registerpage');
  };

  return (
    <div className='login-container'>
      <div className="input-container">
        <p className='input-title'>Nome de Usuário</p>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div className="input-container">
        <PasswordInput label='Senha' value={password} updateValue={setPassword}/>
      </div>
      <div className="button-container">
        <button className='login-button' onClick={handleRegister}>Registrar</button>
        <button className='login-button' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

/* import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <p className='input-title'>Senha</p>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}; */
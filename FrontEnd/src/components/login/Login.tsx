
import { useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react';
import API_URL from '../../utils/config';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
import CustomInput from '../input/CustomInput';

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
      <div className="login-input-container">
        <CustomInput label='Nome de Usuário' value={username} updateValue={setUsername}/>
      </div>
      <div className="login-input-container">
        <CustomInput label='Senha' value={password} updateValue={setPassword} type='password'/>
      </div>
      <div className="login-button-container">
        <button className='login-button' onClick={handleRegister}>Registrar</button>
        <button className='login-button' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
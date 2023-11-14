
import { Link } from 'react-router-dom'
import './login.css'

interface LoginProps {

}
export function Login(props: LoginProps) {
    return (
        <div className='login-container'>
            <div className="input-container">
                <p className='input-title'>Nomde de Usuário</p>
                <input type='text' required />
            </div>
            <div className="input-container">
                <p className='input-title'>Senha</p>
                <input type='password' required />
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
    )
}
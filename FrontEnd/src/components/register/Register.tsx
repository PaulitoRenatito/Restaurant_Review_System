import { Link } from 'react-router-dom'
import './register.css'

interface RegisterProps {

}
export function Register(props: RegisterProps) {
    return (
        <div className='register-container'>
            <div className="input-container">
                <p className='input-title'>Primeiro Nome</p>
                <input type='text' required />
            </div>
            <div className="input-container">
                <p className='input-title'>Ultimo Nome</p>
                <input type='text' required />
            </div>
            <div className="input-container">
                <p className='input-title'>Email</p>
                <input type='text' required />
            </div>
            <div className="input-container">
                <p className='input-title'>Senha</p>
                <input type='password' required />
            </div>
            <div className="button-container">
                <Link to='/'  className='link-container'>
                    <button className='register-button'>Voltar</button>
                </Link>
                <Link to='/main'  className='link-container'>
                    <button className='register-button'>Registrar</button>
                </Link>
            </div>
        </div>
    )
}
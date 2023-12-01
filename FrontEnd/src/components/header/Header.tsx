import './header.css';
import icon from '../../assets/icon_wtbk.png';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Header = () => {

    const { userId } = useUser();
    const navigate = useNavigate();

    const handleGotoMainPage = () => {
        if(userId != null) navigate("/main");
    }

    const handleGotoUserInfoPage = () => {
        if(userId != null) navigate("/user-info");
    }

    const handleGotoLoginPage = () => {
        navigate("/");
    }

    return (
        <header>
            <div className="header-container">
                <img className="icon-image" src={icon} />
                <h1 className="header-title">Sistema de Avaliação de Restaurantes</h1>
                <nav>
                    <p className="header-text" onClick={handleGotoMainPage}>Home</p>
                    <p className="header-text" onClick={handleGotoUserInfoPage}>Usuario</p>
                    <p className="header-text" onClick={handleGotoLoginPage}>Login</p>
                </nav>
            </div>
        </header>
    )
}

export default Header
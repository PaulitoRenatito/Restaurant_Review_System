import './header.css';
import icon from '../../assets/icon_wtbk.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleGotoMainPage = () => {
        navigate("/main")
    }

    const handleGotoUserInfoPage = () => {
        navigate("/user-info")
    }

    return (
        <header>
            <div className="header-container">
                <img className="icon-image" src={icon} />
                <h1 className="header-title">Sistema de Avaliação de Restaurantes</h1>
                <nav>
                    <p className="header-text" onClick={handleGotoMainPage}>Home</p>
                    <p className="header-text" onClick={handleGotoUserInfoPage}>About</p>
                </nav>
            </div>
        </header>
    )
}

export default Header
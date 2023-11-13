import './header.css';
import icon from '../../assets/icon_wtbk.png';

const Header = () => {
    return(
        <header>
            <div className="header-container">
                <img className = "icon-image" src={icon}/>
                <h1 className="header-title">Sistema de Avaliação de Restaurantes</h1>
                <nav>
                    <a className = "header-text" href="#">Home</a>
                    <a className = "header-text" href="#">About</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
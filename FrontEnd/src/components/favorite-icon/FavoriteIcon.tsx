
import { useState } from "react";
import "./favorite-icon.css"

export function FavoriteIcon() {

    const [isFavClicked, setIsFavClicked] = useState(false);

    const handleFavClick = () => {
        // Inverte o estado quando o ícone é clicado
        setIsFavClicked(!isFavClicked);
    };

    return (
        <>
            <span 
            className={`fav-icon ${isFavClicked ? 'clicked' : ''}`} 
            onClick={(e) => handleFavClick()} />
        </>
    )
}
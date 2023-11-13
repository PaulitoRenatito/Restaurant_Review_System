import { Link } from "react-router-dom";
import "./card.css"

interface CardProps {
    name: string,
    image: string,
    type_of_kitchen: string,
    min_price: number,
    max_price: number,
    average_rating: number
}

export function Card({name, image, type_of_kitchen, min_price, max_price, average_rating} : CardProps){
    return(
        <Link to="/restaurant-info">
            <div className="card light-theme">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <img src={image} alt={name}/>
                <div className="card-body">
                    <h4><b>{name}</b></h4>
                    <p>Cozinha {type_of_kitchen}</p>
                    <p>R$ {min_price} - R$ {max_price}</p>
                    <p>
                        {average_rating} <span className="fa fa-star checked"></span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export function filterCards(cards: CardProps[], searchText: string) {

    const lowercaseSearchText = searchText.toLowerCase().trim();

    if (!lowercaseSearchText) {
        return cards;
    }

    return cards.filter((card) => {
        return card.name.toLowerCase().includes(lowercaseSearchText);
    });
}
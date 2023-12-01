import { Link, useNavigate } from "react-router-dom";
import "./card.css"
import { useRestaurant } from "../../context/RestaurantContext";
import { RestaurantData } from "../../interface/RestaurantData";

interface CardProps {
    id: number,
    name: string,
    image: string,
    type_of_kitchen: string,
    min_price: number,
    max_price: number,
    average_rating: number
}
export function Card({ id, name, image, type_of_kitchen, min_price, max_price, average_rating }: CardProps) {

    const navigate = useNavigate();
    const { updateRestaurant } = useRestaurant();

    const handleClick = async () => {
        updateRestaurant(id)
        navigate('/restaurant-info');
    };

    return (
        <div className="card light-theme" onClick={handleClick}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <img src={image} alt={name} />
            <div className="card-body">
                <h4><b>{name}</b></h4>
                <p>Cozinha {type_of_kitchen}</p>
                <p>R$ {min_price} - R$ {max_price}</p>
                <p>
                    {average_rating} <span className="fa fa-star checked"></span>
                </p>
            </div>
        </div>
    )
}

export function filterCards(cards: RestaurantData[], searchName?: string, priceRange?: [number, number], minRating?: number) {
    let filteredCards = [...cards];

    if (searchName) {
        const lowercaseSearchName = searchName.toLowerCase().trim();
        filteredCards = filteredCards.filter((card) => card.name.toLowerCase().includes(lowercaseSearchName));
    }

    console.log(priceRange);

    if (priceRange && !isNaN(priceRange[0]) && !isNaN(priceRange[1])) {
        const [minPrice, maxPrice] = priceRange;
        filteredCards = filteredCards.filter((card) => card.min_price >= minPrice && card.max_price <= maxPrice);
    }

    if (minRating !== undefined) {
        filteredCards = filteredCards.filter((card) => card.average_rating >= minRating);
    }

    return filteredCards;
}
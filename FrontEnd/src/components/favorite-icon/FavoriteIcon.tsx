
import { useEffect, useState } from "react";
import "./favorite-icon.css"
import { useUser } from "../../context/UserContext";
import { useRestaurant } from "../../context/RestaurantContext";
import { FavoriteData } from "../../interface/FavoriteData";
import { useFavoriteMutate } from "../../hooks/favorite/useFavoriteMutate";
import { useFavoriteByID } from "../../hooks/favorite/useFavoriteByID";

export function FavoriteIcon() {

    const { userId } = useUser();
    const { restaurantId } = useRestaurant();

    const { mutate } = useFavoriteMutate();

    const { data } = useFavoriteByID(userId!, restaurantId!)

    const [isFavClicked, setIsFavClicked] = useState(false);

    useEffect(() => {
        setIsFavClicked(data!);
    })

    const handleFavClick = () => {

        const favoriteData: FavoriteData = {
            user_id: userId!,
            restaurant_id: restaurantId!
        }

        mutate(favoriteData);

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
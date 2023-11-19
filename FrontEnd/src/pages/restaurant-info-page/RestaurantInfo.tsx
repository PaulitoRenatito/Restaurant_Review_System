import { useParams } from "react-router-dom";

import './restaurant-info-page.css'
import { useRestaurantById } from "../../hooks/get/useRestaurantById";
import { FavoriteIcon } from "../../components/favorite-icon/FavoriteIcon";
import { CardList } from "../../components/valuation-card-list/ValuationList";
import { useUser } from "../../context/UserContext";
import { useRestaurant } from "../../context/RestaurantContext";

function RestaurantInfoPage() {

  const { userId } = useUser();
  const { restaurantId } = useRestaurant();
  const { data } = useRestaurantById(restaurantId!);

  return (
    <div className='body'>
      <img className='restaurant-image' src={data?.image} />
      <div className='restaurant-title-fav'>
        <h1 className='restaurant-title'>{data?.name}</h1>
        <FavoriteIcon />
      </div>
      <h2 className='restaurant-info'>
        <p>Cozinha {data?.type_of_kitchen}</p>
        <p>Aberto entre {data?.opening_hours}</p>
        <p>Valores entre R$ {data?.min_price} - R$ {data?.max_price}</p>
      </h2>
      <p className="restaurant-desc">{data?.description}</p>
      <div className="restaurant-bottom-info">
        <text>Endereço: {data?.address}</text>
        <text>Telefone: {data?.phone}</text>
        <text>Email: {data?.email}</text>
      </div>
      <CardList />
    </div>
  )
}

export default RestaurantInfoPage
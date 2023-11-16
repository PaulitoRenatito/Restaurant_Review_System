import { useParams } from "react-router-dom";

import './restaurant-info-page.css'
import { useRestaurantById } from "../../hooks/useRestaurantById";

function RestaurantInfoPage() {

  const { id } = useParams();
  const restaurantId = +id!;
  const { data } = useRestaurantById(restaurantId);

  return (
    <div className='body'>
      <img className='restaurant-image' src={data?.image} />
      <div className='restaurant-title-fav'>
        <h1 className='restaurant-title'>{data?.name}</h1>
        <span className="fav-icon"/>
      </div>
      <h2 className='restaurant-info'>
        <p>Cozinha {data?.type_of_kitchen}</p>
        <p>Aberto entre {data?.opening_hours}</p>
        <p>Valores entre {data?.min_price} e {data?.max_price}</p>
      </h2>
      <p className="restaurant-desc">{data?.description}</p>
      <div className="restaurant-bottom-info">
        <text>Endereço: {data?.address}</text>
        <text>Telefone: {data?.phone}</text>
        <text>Email: {data?.email}</text>
      </div>
    </div>
  )
}

export default RestaurantInfoPage
import './restaurant-info-page.css'
import { useRestaurantById } from "../../hooks/restaurant/useRestaurantById";
import { FavoriteIcon } from "../../components/favorite-icon/FavoriteIcon";
import { ValuationList } from "../../components/valuation-card-list/ValuationList";
import { useRestaurant } from "../../context/RestaurantContext";
import { useState } from 'react';
import { CreateModalValuation } from '../../components/create-modal-valuation/CreateModalValuation';
import { useValuationByRestaurantID } from '../../hooks/valuation/useValuationByRestaurantID';

function RestaurantInfoPage() {

  const { restaurantId } = useRestaurant();
  const { data } = useRestaurantById(restaurantId!);
  const { data: valuationData } = useValuationByRestaurantID(restaurantId!);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

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
        <p>Endereço: {data?.address}</p>
        <p>Telefone: {data?.phone}</p>
        <p>Email: {data?.email}</p>
      </div>
      <ValuationList valuations={valuationData}/>
      {isModalOpen && <CreateModalValuation closeModal={handleOpenModal} />}
      <div className='add-valuation' onClick={handleOpenModal}>
        <i className="fa fa-plus" aria-hidden="true"></i>
        <p className='add-valuation-text'>Adicionar Comentario</p>
      </div>
    </div>
  )
}

export default RestaurantInfoPage
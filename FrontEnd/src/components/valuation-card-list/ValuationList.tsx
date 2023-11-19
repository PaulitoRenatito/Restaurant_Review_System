
import { useState } from 'react';
import { ValuationCard } from '../valuation-card/ValuationCard'
import './valuation-list.css'
import { CreateModalValuation } from '../create-modal-valuation/CreateModalValuation';
import { useValuationByRestaurantID } from '../../hooks/get/useValuationByRestaurantID';
import { useRestaurant } from '../../context/RestaurantContext';
import { ValuationData } from '../../interface/ValuationData';
import { useUser } from '../../context/UserContext';
import { useUserByID } from '../../hooks/get/useUserByID';



interface CardListProps {

}
export function CardList(props: CardListProps) {

    const { userId } = useUser();
    const { restaurantId } = useRestaurant();

    console.log("User ID: " + userId + " | Restaurant ID: " + restaurantId);

    const { data: valuationData } = useValuationByRestaurantID(restaurantId!);
    const { data: userData } = useUserByID(userId!);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <>
            <h1>Comentarios do Restaurante</h1>
            <div className='card-list'>
                {valuationData?.map((valuationData: ValuationData) =>
                    <ValuationCard
                        username={userData?.first_name!}
                        comment={valuationData.comment}
                        date={valuationData.date}
                        hour={valuationData.hour}
                    />
                )}
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {isModalOpen && <CreateModalValuation closeModal={handleOpenModal} />}
            <div className='add-valuation' onClick={handleOpenModal}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <p className='add-valuation-text'>Adicionar Comentario</p>
            </div>
        </>
    )
}
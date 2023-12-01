
import { useRestaurantById } from '../../hooks/restaurant/useRestaurantById';
import { useUserByID } from '../../hooks/user/useUserByID'
import './valuation-card.css'

interface ValuationCardProps {
    user_id: number,
    restaurant_id: number,
    rating: number,
    comment: string,
    date: string,
    hour: string
}
export function ValuationCard({ user_id, restaurant_id, rating, comment, date, hour }: ValuationCardProps) {

    const username = useUserByID(user_id).data?.first_name;
    const restaurant_name = useRestaurantById(restaurant_id).data?.name;

    return (
        <div className='valuation-card-background'>
            <div className='valuation-card-body'>
                <h4 className='valuation-card-title'>
                    <b>{username}</b>
                    <span>{rating} &#9733;</span>
                </h4>
                <p className='valuation-card-description'>{comment}</p>
                <p className='valuation-card-date'>Para: <b>{restaurant_name}</b> as {hour.substring(0, 5)} do dia {date}</p>
            </div>
        </div>
    )
}
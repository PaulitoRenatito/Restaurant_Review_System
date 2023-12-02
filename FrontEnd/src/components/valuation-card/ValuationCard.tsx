
import axios from 'axios';
import { useRestaurantById } from '../../hooks/restaurant/useRestaurantById';
import { useUserByID } from '../../hooks/user/useUserByID'
import './valuation-card.css'
import { API_URL, QUERY_STRINGS } from '../../utils/config';
import { useUser } from '../../context/UserContext';
import { useQueryClient } from '@tanstack/react-query';
import { ButtonDelete } from '../button-delete/ButtonDelete';

interface ValuationCardProps {
    user_id: number,
    restaurant_id: number,
    rating: number,
    comment: string,
    date: string,
    hour: string
}
export function ValuationCard({ user_id, restaurant_id, rating, comment, date, hour }: ValuationCardProps) {

    const { userId: current_user } = useUser();
    const queryClient = useQueryClient();
    const username = useUserByID(user_id).data?.first_name;
    const restaurant_name = useRestaurantById(restaurant_id).data?.name;

    const deleteComment = () => {

        axios.delete(API_URL + "/valuation/" + user_id + '/' + restaurant_id)
            .then(response => {
                console.log(`Deletada ${user_id} : ${restaurant_id}`, response);
                queryClient.invalidateQueries({ queryKey: [QUERY_STRINGS.VALUATION_QUERY] });
            })
            .catch(error => {
                console.log('Erro', error);
            });
    }

    return (
        <div className='valuation-card-background'>
            <div className='valuation-card-body'>
                <h4 className='valuation-card-title'>
                    <b>{username}</b>
                    <span>{rating} &#9733;</span>
                </h4>
                <p className='valuation-card-description'>{comment}</p>
                <div className='valuation-card-bottom'>
                    <p className='valuation-card-date'>Para: <b>{restaurant_name}</b> as {hour.substring(0, 5)} do dia {date}</p>
                    {current_user === user_id && <ButtonDelete onClick={deleteComment} />}
                </div>
            </div>
        </div>
    )
}
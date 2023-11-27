
import { ValuationCard } from '../valuation-card/ValuationCard'
import './valuation-list.css'
import { ValuationData } from '../../interface/ValuationData';
import { useUser } from '../../context/UserContext';
import { useUserByID } from '../../hooks/user/useUserByID';



interface ValuationListProps {
    valuations: any,
    label?: string
}
export function ValuationList({ valuations, label }: ValuationListProps) {

    const { userId } = useUser();
    const { data: userData } = useUserByID(userId!);

    return (
        <>
            <h1>{label}</h1>
            <div className='card-list'>
                {valuations?.map((valuationData: ValuationData) =>
                    <ValuationCard
                        key={parseInt(valuationData.user_id.toString() + valuationData.restaurant_id.toString())}
                        username={userData?.first_name!}
                        rating={valuationData.rating}
                        comment={valuationData.comment}
                        date={valuationData.date}
                        hour={valuationData.hour}
                    />
                )}
            </div>
        </>
    )
}
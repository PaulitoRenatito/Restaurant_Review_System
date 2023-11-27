
import './valuation-card.css'

interface ValuationCardProps {
    username: string,
    rating: number,
    comment: string,
    date: string,
    hour: string
}
export function ValuationCard({ username, rating, comment, date, hour }: ValuationCardProps) {
    return (
        <div className='valuation-card-background'>
            <div className='valuation-card-body'>
                <h4 className='valuation-card-title'>
                    <b>{username}</b>
                    <span>{rating} &#9733;</span>
                </h4>
                <p className='valuation-card-description'>{comment}</p>
                <p className='valuation-card-date'>{date} {hour.substring(0, 5)}</p>
            </div>
        </div>
    )
}

import './valuation-card.css'

interface ValuationCardProps {
    username: string,
    comment: string,
    date: string,
    hour: string
}
export function ValuationCard({ username, comment, date, hour }: ValuationCardProps) {
    return (
        <div className='valuation-card-background'>
            <div className='valuation-card-body'>
                <h4 className='valuation-card-title'><b>{username}</b></h4>
                <p className='valuation-card-description'>{comment}</p>
                <p className='valuation-card-date'>{date} {hour}</p>
            </div>
        </div>
    )
}
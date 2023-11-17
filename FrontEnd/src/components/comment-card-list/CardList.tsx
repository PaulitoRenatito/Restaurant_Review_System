
import { ValuationCard } from '../coment-card/ValuationCard'
import './card-list.css'

interface CardListProps {

}
export function CardList(props: CardListProps) {
    return (
        <>
            <h1>Comentarios do Restaurante</h1>
            <div className='card-list'>
                <ValuationCard />
                <ValuationCard />
                <ValuationCard />
                <ValuationCard />
                <ValuationCard />
            </div>
        </>
    )
}
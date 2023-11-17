
import './valuation-card.css'

interface ValuationCardProps {

}
export function ValuationCard(props: ValuationCardProps) {
    return (
        <div className='valuation-card-background'>
            <div className='valuation-card-body'>
                <h4 className='valuation-card-title'><b>Usuario</b></h4>
                <p className='valuation-card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula diam, cursus nec libero sit amet, fringilla feugiat arcu. Aliquam pharetra ut orci non efficitur. Aliquam vel felis eget ipsum condimentum commodo. Nunc consectetur laoreet urna vitae pulvinar. Nulla ut rutrum ligula. Quisque aliquam eros maximus nisi maximus, sed ornare lectus tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer placerat pellentesque risus, at consectetur massa. Proin at massa sem. Curabitur at luctus massa.</p>
                <p className='valuation-card-date'>11/07/2023 11:34</p>
            </div>
        </div>
    )
}
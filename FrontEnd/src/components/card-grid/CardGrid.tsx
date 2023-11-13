import { Card } from "../card/Card";

import "./card-grid.css"

interface CardgridProps {
  cards: any
}
export function CardGrid({ cards } : CardgridProps) {
    return(
        <div className='card-grid'>
          {cards?.map((restaurantData: { name: string; image: string; type_of_kitchen: string; min_price: number; max_price: number; average_rating: number; }) => 
            <Card
              name={restaurantData.name}
              image={restaurantData.image}
              type_of_kitchen={restaurantData.type_of_kitchen} 
              min_price={restaurantData.min_price}
              max_price={restaurantData.max_price} 
              average_rating={restaurantData.average_rating}
            />
          )}
        </div>
    )
}
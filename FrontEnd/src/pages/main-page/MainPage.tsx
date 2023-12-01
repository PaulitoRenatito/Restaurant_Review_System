import { useState } from 'react';
import { CardGrid } from '../../components/card-grid/CardGrid';
import { SearchInput } from '../../components/search-input/SearchInput';
import { useRestaurantData } from '../../hooks/restaurant/useRestaurantData';

import './mainpage.css'
import { filterCards } from '../../components/card/Card';
import { StarRating } from '../../components/star-rating/StarRating';
import { PriceRangeInput } from '../../components/price-range-input/PriceRangeInput';


function MainPage() {

  const { data: cards } = useRestaurantData();

  const [searchText, setSearchText] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>();
  const [minRating, setMinRating] = useState<number>();

  const foundCards = cards ? filterCards(cards, searchText, priceRange, minRating) : [];

  return (
    <>
      <div className='mainpage-filter-overlay'>
        <h1 className='mainpage-title'>Restaurantes</h1>
        <SearchInput value={searchText} onChange={newText => setSearchText(newText)} />
        <div className='mainpage-filters'>
          <PriceRangeInput value={priceRange!} updateValue={setPriceRange} />
          <StarRating color='white' label = 'Filtrar por Avaliações' updateValue={setMinRating} />
        </div>
      </div>
      <div className='mainpage-overlay'>
        <CardGrid cards={foundCards} />
      </div>
    </>
  )
}

export default MainPage
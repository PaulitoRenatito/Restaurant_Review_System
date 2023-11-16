import { SearchableCardgrid } from '../../components/searchable-cardgrid/SearchableCardgrid';
import { useRestaurantData } from '../../hooks/useRestaurantData';

import './mainpage.css'


function MainPage() {

  const { data } = useRestaurantData();

  return (
    <>
      <h1>Restaurantes</h1>
      <SearchableCardgrid cards={data} />
    </>
  )
}

export default MainPage
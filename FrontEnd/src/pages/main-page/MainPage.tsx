import HeaderAndFooter from '../../components/header-footer/HeaderFooter';
import { SearchableCardgrid } from '../../components/searchable-cardgrid/SearchableCardgrid';
import { useRestaurantData } from '../../hooks/useRestaurantData';

import './mainpage.css'


function MainPage() {

  const { data } = useRestaurantData();

  return (
    <div className='container'>
      <HeaderAndFooter>
        <div className='main-body'>
          <h1>Restaurantes</h1>
          <SearchableCardgrid cards={ data }/>
        </div>
      </HeaderAndFooter>
    </div>
  )
}

export default MainPage
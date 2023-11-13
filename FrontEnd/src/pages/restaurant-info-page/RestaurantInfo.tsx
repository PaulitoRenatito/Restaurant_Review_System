import HeaderAndFooter from "../../components/header-footer/HeaderFooter";
import { useRestaurantData } from "../../hooks/useRestaurantData";

import './restaurant-info-page.css'

function RestaurantInfoPage() {

    const { data } = useRestaurantData();
  
    return (
      <div className='container'>
        <HeaderAndFooter>
          <div className='main-body'>
            <h1>Restaurantes</h1>
          </div>
        </HeaderAndFooter>
      </div>
    )
  }
  
  export default RestaurantInfoPage
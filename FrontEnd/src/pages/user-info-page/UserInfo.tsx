import { CardGrid } from "../../components/card-grid/CardGrid";
import { ValuationList } from "../../components/valuation-card-list/ValuationList";
import { useUser } from "../../context/UserContext";
import { useFavoriteRestaurantByUser } from "../../hooks/restaurant/useFavoriteRestaurantByUser";
import { useUserByID } from "../../hooks/user/useUserByID";
import { useValuationByUserID } from "../../hooks/valuation/useValuationByUserID";

import "./user-info-page.css"

function UserInfoPage() {

  const { userId } = useUser();
  const { data: userData } = useUserByID(userId!);
  const { data: favoriteRestaurantsData } = useFavoriteRestaurantByUser(userId!);
  const { data: valuationData } = useValuationByUserID(userId!);

  return (
    <>
      <div className="user-info-overlay-top">
      <img src={userData?.profile_picture || 'https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg'} alt="Profile" />
        <h1>{userData?.first_name} {userData?.last_name}</h1>
        <h3>{userData?.email}</h3>
      </div>
      <div className="user-info-overlay-bottom">
        <CardGrid cards={favoriteRestaurantsData!} label="Favoritos"/>
        <ValuationList valuations={valuationData!} label="Comentarios"/>
      </div>
    </>
  )
}

export default UserInfoPage
import axios, { AxiosPromise } from "axios"
import { RestaurantData } from "../../interface/RestaurantData";
import { useQuery } from "@tanstack/react-query";
import API_URL from "../../utils/config";

const fetchData = async (user_id: number): AxiosPromise<RestaurantData[]> => {
    const response = axios.get(API_URL + "/restaurant/getFavoritesByUser/" + user_id)
    return response;
}
export function useFavoriteRestaurantByUser(user_id: number){
    
    const query = useQuery({
        queryFn: () => fetchData(user_id),
        queryKey: ['restaurant-getFavoriteRestaurantByUser-data', user_id],
        retry: 2
    })
    
    return {
        ...query,
        data: query.data?.data
    }
}